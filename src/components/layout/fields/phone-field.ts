import { html, css, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { BaseField } from './base-field';
import { getCountries, getCountryCallingCode, parsePhoneNumberFromString } from 'libphonenumber-js';

type CountryOption = {
  code: string;
  name: string;
  callingCode: string;
};

const displayNames =
  typeof Intl !== 'undefined' && 'DisplayNames' in Intl
    ? new Intl.DisplayNames(['en'], { type: 'region' })
    : null;

function countryName(code: string): string {
  return displayNames?.of(code) || code;
}

const COUNTRY_OPTIONS: CountryOption[] = getCountries()
  .map((code) => ({
    code,
    name: countryName(code),
    callingCode: getCountryCallingCode(code),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

const COUNTRY_CODE_SET = new Set(COUNTRY_OPTIONS.map((country) => country.code));
const CALLING_CODE_TO_COUNTRY = new Map<string, string>();
const FALLBACK_COUNTRY = 'US';

for (const country of COUNTRY_OPTIONS) {
  if (!CALLING_CODE_TO_COUNTRY.has(country.callingCode)) {
    CALLING_CODE_TO_COUNTRY.set(country.callingCode, country.code);
  }
}

function resolveLocaleCountry(): string {
  const locale = Intl.DateTimeFormat().resolvedOptions().locale || '';
  const region = locale.match(/[-_](\w{2})\b/i)?.[1]?.toUpperCase();
  return region && COUNTRY_CODE_SET.has(region) ? region : '';
}

@customElement('shipthis-phone-field')
export class ShipthisPhoneField extends BaseField {
  @state() private selectedCountry = '';
  @state() private localNumber = '';
  @state() private showCountryMenu = false;
  @state() private countrySearchQuery = '';
  @property() default_country = '';
  private syncingFromInternal = false;

  static styles = css`
    ${BaseField.styles}

    .phone-row {
      display: grid;
      grid-template-columns: minmax(72px, 1fr) minmax(0, 4fr);
      gap: 10px;
      align-items: center;
    }

    .country-picker {
      position: relative;
      min-width: 0;
      max-width: 100%;
    }

    .country-trigger {
      width: 100%;
      text-align: left;
      padding: 10px 12px;
      border: 1.5px solid var(--qwc-border);
      border-radius: var(--qwc-radius);
      font-size: 14px;
      background: var(--qwc-surface);
      color: var(--qwc-text);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      min-height: 42px;
      font-weight: 600;
    }

    .country-trigger:hover {
      border-color: var(--qwc-primary);
    }

    .country-trigger-label {
      font-variant-numeric: tabular-nums;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .country-trigger-caret {
      color: var(--qwc-text-muted);
      font-size: 11px;
      line-height: 1;
      flex: 0 0 auto;
    }

    .country-menu {
      position: absolute;
      top: calc(100% + 6px);
      left: 0;
      min-width: 100%;
      max-width: min(320px, 92vw);

      z-index: 50;
      background: var(--qwc-bg);
      border: 1px solid var(--qwc-border);
      border-radius: 10px;
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
      overflow: hidden;
    }

    .country-list {
      max-height: 220px;
      overflow-y: auto;
    }

    .country-search-wrap {
      padding: 8px;
      border-bottom: 1px solid var(--qwc-border);
      background: var(--qwc-surface);
    }

    .country-search-input {
      width: 100%;
      padding: 8px 10px;
      border: 1px solid var(--qwc-border);
      border-radius: 8px;
      font-size: 13px;
      background: var(--qwc-bg);
      color: var(--qwc-text);
      box-sizing: border-box;
      outline: none;
    }

    .country-search-input:focus {
      border-color: var(--qwc-primary);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--qwc-primary) 10%, transparent);
    }

    .country-item {
      width: 100%;
      border: 0;
      background: transparent;
      color: var(--qwc-text);
      text-align: left;
      padding: 10px 12px;
      cursor: pointer;
      font-size: 13px;
      display: flex;
      justify-content: space-between;
    }

    .country-item:hover {
      background: var(--qwc-surface);
    }

    .country-item.selected {
      color: var(--qwc-primary);
      font-weight: 600;
    }

    .format-description {
      margin-top: 6px;
      font-size: 11px;
      color: var(--qwc-text-muted);
    }
  `;

  protected firstUpdated() {
    this.hydrateFromValue(String(this.value || ''));
    this.ensureDefaultCountry();
  }

  protected updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('value') && !this.syncingFromInternal) {
      this.hydrateFromValue(String(this.value || ''));
      this.ensureDefaultCountry();
    }

    if (changedProperties.has('default_country')) {
      this.ensureDefaultCountry();
    }
  }

  protected handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const raw = target.value.trim();

    this.localNumber = raw.replace(/[^\d]/g, '');
    this.syncValue();
    this.validate();
    this.dispatchChange();
  }

  private toggleCountryMenu() {
    this.showCountryMenu = !this.showCountryMenu;
    if (!this.showCountryMenu) {
      this.countrySearchQuery = '';
    }
  }

  private selectCountry(code: string) {
    this.selectedCountry = code;
    this.showCountryMenu = false;
    this.countrySearchQuery = '';
    this.syncValue();
    this.validate();
    this.dispatchChange();
  }

  private handleCountrySearchInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.countrySearchQuery = target.value;
  }

  private resolveConfiguredDefaultCountry(): string {
    const rawDefault = String(this.default_country || '').trim();
    if (!rawDefault) {
      return '';
    }

    const upperDefault = rawDefault.toUpperCase();
    if (COUNTRY_CODE_SET.has(upperDefault)) {
      return upperDefault;
    }

    const cleanedCallingCode = rawDefault.replace(/^\+/, '').replace(/[^\d]/g, '');
    if (!cleanedCallingCode) {
      return '';
    }

    return CALLING_CODE_TO_COUNTRY.get(cleanedCallingCode) || '';
  }

  private resolveDefaultCountry(): string {
    return this.resolveConfiguredDefaultCountry() || resolveLocaleCountry() || FALLBACK_COUNTRY;
  }

  private ensureDefaultCountry() {
    if (this.selectedCountry) {
      return;
    }

    this.selectedCountry = this.resolveDefaultCountry();
  }

  private syncValue() {
    const code = this.countryCallingCode;
    const nextValue = this.localNumber && code ? `+${code}${this.localNumber}` : '';
    if (this.value === nextValue) {
      return;
    }

    this.syncingFromInternal = true;
    this.value = nextValue;
    this.syncingFromInternal = false;
  }

  private hydrateFromValue(rawValue: string) {
    const parsed = parsePhoneNumberFromString(rawValue);
    if (parsed?.country) {
      this.selectedCountry = parsed.country;
      this.localNumber = String(parsed.nationalNumber || '');
      return;
    }

    if (!rawValue?.trim()) {
      this.localNumber = '';
    }
  }

  private get selectedCountryOption(): CountryOption | undefined {
    return COUNTRY_OPTIONS.find((c) => c.code === this.selectedCountry);
  }

  private get countryCallingCode(): string {
    return this.selectedCountryOption?.callingCode || '';
  }

  private get filteredCountryOptions(): CountryOption[] {
    const query = this.countrySearchQuery.trim().toLowerCase();
    if (!query) {
      return COUNTRY_OPTIONS;
    }

    return COUNTRY_OPTIONS.filter((country) =>
      country.name.toLowerCase().includes(query) ||
      country.code.toLowerCase().includes(query) ||
      country.callingCode.includes(query.replace('+', ''))
    );
  }

  public validate(): boolean {
    const raw = String(this.value || '').trim();
    const isRequired = this.required || !!this.field?.attributes?.required;

    if (!raw || !this.localNumber) {
      this.isInvalid = isRequired;
      this.errorMessage = this.isInvalid ? 'This field is required' : '';
      return !this.isInvalid;
    }

    let parsed;
    try {
      parsed = parsePhoneNumberFromString(raw);
    } catch {
      parsed = undefined;
    }

    const isValid = !!(parsed && parsed.isValid());
    this.isInvalid = !isValid;
    this.errorMessage = isValid ? '' : `Enter a valid number for +${this.countryCallingCode}`;
    return isValid;
  }

  protected renderInput() {
    const option = this.selectedCountryOption;
    const selectedDialCode = option ? `+${option.callingCode}` : 'Select country';

    return html`
      <div>
        <div class="phone-row">
          <div class="country-picker">
            <button
              type="button"
              class="country-trigger"
              @click=${this.toggleCountryMenu}
            >
              <span class="country-trigger-label">${selectedDialCode}</span>
              <span class="country-trigger-caret">${this.showCountryMenu ? '▴' : '▾'}</span>
            </button>

            ${this.showCountryMenu ? html`
              <div class="country-menu">
                <div class="country-search-wrap">
                  <input
                    class="country-search-input"
                    type="text"
                    placeholder="Search country/code"
                    .value=${this.countrySearchQuery}
                    @input=${this.handleCountrySearchInput}
                  />
                </div>
                <div class="country-list">
                  ${this.filteredCountryOptions.map((country) => html`
                    <button
                      class="country-item ${country.code === this.selectedCountry ? 'selected' : ''}"
                      @click=${() => this.selectCountry(country.code)}
                    >
                      <span>${country.name}</span>
                      <span>+${country.callingCode}</span>
                    </button>
                  `)}
                </div>
              </div>
            ` : ''}
          </div>

          <input
            type="tel"
            .value=${this.localNumber}
            placeholder=${this.placeholder || 'Phone number'}
            ?disabled=${this.disabled}
            ?readonly=${this.read_only}
            @input=${this.handleInput}
          />
        </div>

        <div class="format-description">
          ${option
            ? `Using country code +${option.callingCode}`
            : 'Select a country code'}
        </div>
      </div>
    `;
  }
}
