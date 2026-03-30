import { html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { BaseField } from './base-field';
import { getCountries, getCountryCallingCode, parsePhoneNumberFromString } from 'libphonenumber-js';

type CountryOption = {
  code: string;
  name: string;
  callingCode: string;
  flag: string;
};

const displayNames =
  typeof Intl !== 'undefined' && 'DisplayNames' in Intl
    ? new Intl.DisplayNames(['en'], { type: 'region' })
    : null;

function countryName(code: string): string {
  return displayNames?.of(code) || code;
}

function flagEmoji(iso: string): string {
  return iso
    .toUpperCase()
    .split('')
    .map((c) => String.fromCodePoint(127397 + c.charCodeAt(0)))
    .join('');
}

const COUNTRY_OPTIONS: CountryOption[] = getCountries()
  .map((code) => ({
    code,
    name: countryName(code),
    callingCode: getCountryCallingCode(code),
    flag: flagEmoji(code),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

@customElement('shipthis-phone-field')
export class ShipthisPhoneField extends BaseField {
  @state() private selectedCountry = 'US';
  @state() private localNumber = '';
  @state() private showCountryMenu = false;
  @state() private countrySearchQuery = '';
  @property() default_country = '';
  private syncingFromInternal = false;

  static styles = css`
    ${BaseField.styles}
    .phone-row {
      display: flex;
      flex-wrap: nowrap;
      gap: 8px;
      align-items: center;
    }
    .phone-row > input {
      flex: 1 1 80%;
      min-width: 0;
    }
    .country-picker {
      position: relative;
      flex: 0 0 20%;
      min-width: 110px;
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
    }
    .country-trigger:hover {
      border-color: var(--qwc-primary);
      background: var(--qwc-bg);
    }
    .country-trigger:focus-visible {
      border-color: var(--qwc-primary);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--qwc-primary) 10%, transparent);
      outline: none;
    }
    .country-trigger-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .country-menu {
      position: absolute;
      top: calc(100% + 6px);
      left: 0;
      right: 0;
      z-index: 50;
      background: var(--qwc-bg);
      border: 1px solid var(--qwc-border);
      border-radius: 10px;
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
      overflow: hidden;
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
      outline: none;
      box-sizing: border-box;
    }
    .country-search-input:focus {
      border-color: var(--qwc-primary);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--qwc-primary) 10%, transparent);
    }
    .country-list {
      max-height: 240px;
      overflow-y: auto;
      background: var(--qwc-bg);
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
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }
    .country-item:hover {
      background: var(--qwc-surface);
    }
    .country-item.selected {
      color: var(--qwc-primary);
      background: color-mix(in srgb, var(--qwc-primary) 10%, transparent);
      font-weight: 600;
    }
    .country-item-main {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .country-item-empty {
      padding: 12px;
      font-size: 12px;
      color: var(--qwc-text-muted);
    }
    .format-description {
      margin-top: 6px;
      font-size: 11px;
      color: var(--qwc-text-muted);
      line-height: 1.3;
    }
  `;

  protected firstUpdated() {
    this.hydrateFromValue(String(this.value || ''));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('pointerdown', this.handleGlobalPointerDown);
  }

  protected updated(changed: Map<string, unknown>) {
    super.updated(changed);
    if (changed.has('value') && !this.syncingFromInternal) {
      this.hydrateFromValue(String(this.value || ''));
    }
  }

  protected handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.localNumber = target.value.replace(/[^\d]/g, '');
    this.syncValue();
  }

  private handleCountrySearchInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.countrySearchQuery = target.value;
  }

  private handleCountrySearchKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      e.preventDefault();
      this.closeCountryMenu();
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      const first = this.filteredCountryOptions[0];
      if (first) this.selectCountry(first.code);
    }
  }

  private toggleCountryMenu() {
    if (this.disabled || this.read_only) return;
    if (this.showCountryMenu) {
      this.closeCountryMenu();
    } else {
      this.openCountryMenu();
    }
  }

  private openCountryMenu() {
    if (this.showCountryMenu) return;
    this.showCountryMenu = true;
    this.countrySearchQuery = '';
    window.addEventListener('pointerdown', this.handleGlobalPointerDown);
    this.updateComplete.then(() => {
      const input = this.renderRoot.querySelector('.country-search-input') as HTMLInputElement | null;
      input?.focus();
    });
  }

  private closeCountryMenu() {
    if (!this.showCountryMenu) return;
    this.showCountryMenu = false;
    this.countrySearchQuery = '';
    window.removeEventListener('pointerdown', this.handleGlobalPointerDown);
  }

  private handleGlobalPointerDown = (event: PointerEvent) => {
    if (!this.showCountryMenu) return;
    const path = event.composedPath();
    if (!path.includes(this)) {
      this.closeCountryMenu();
    }
  };

  private selectCountry(code: string) {
    this.selectedCountry = code || this.resolveDefaultCountry();
    this.closeCountryMenu();
    this.syncValue();
  }

  private syncValue() {
    const code = this.countryCallingCode;
    const nextValue = this.localNumber ? `+${code}${this.localNumber}` : '';

    this.syncingFromInternal = true;
    this.value = nextValue;
    this.syncingFromInternal = false;
    this.validate();
    this.dispatchChange();
  }

  private hydrateFromValue(rawValue: string) {
    const raw = rawValue.trim();
    if (!raw) {
      this.selectedCountry = this.resolveDefaultCountry();
      this.localNumber = '';
      return;
    }

    const parsed = parsePhoneNumberFromString(raw);
    if (parsed?.country) {
      this.selectedCountry = parsed.country;
      this.localNumber = String(parsed.nationalNumber || '').replace(/[^\d]/g, '');
      return;
    }

    const digits = raw.replace(/\D/g, '');
    const matched = COUNTRY_OPTIONS.find((c) => digits.startsWith(c.callingCode));
    this.selectedCountry = matched?.code || this.resolveDefaultCountry();
    this.localNumber = matched ? digits.slice(matched.callingCode.length) : digits;
  }

  private resolveDefaultCountry(): string {
    const configured =
      this.default_country ??
      this.field?.field_meta?.default_country ??
      this.field?.attributes?.default_country ??
      this.field?.field_meta?.default_country_code ??
      this.field?.attributes?.default_country_code ??
      this.field?.field_meta?.default_dial_code ??
      this.field?.attributes?.default_dial_code ??
      this.prefix_text;

    const normalized = String(configured || '').trim().toUpperCase();
    if (/^[A-Z]{2}$/.test(normalized) && COUNTRY_OPTIONS.some((c) => c.code === normalized)) {
      return normalized;
    }

    const dial = normalized.replace('+', '');
    if (/^\d+$/.test(dial)) {
      const byDial = COUNTRY_OPTIONS.find((c) => c.callingCode === dial);
      if (byDial) return byDial.code;
    }

    return 'US';
  }

  private get selectedCountryOption(): CountryOption {
    return COUNTRY_OPTIONS.find((c) => c.code === this.selectedCountry) || COUNTRY_OPTIONS[0];
  }

  private get countryCallingCode(): string {
    return this.selectedCountryOption.callingCode;
  }

  private get filteredCountryOptions(): CountryOption[] {
    const query = this.countrySearchQuery.trim().toLowerCase();
    if (!query) return COUNTRY_OPTIONS;
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

    let pn;
    try { pn = parsePhoneNumberFromString(raw); }
    catch { pn = undefined; }

    const isValid = !!(pn && pn.isValid());
    this.isInvalid = !isValid;
    this.errorMessage = !isValid ? `Enter a valid number for +${this.countryCallingCode}` : '';
    
    return isValid;
  }

  protected renderInput() {
    const option = this.selectedCountryOption;

    return html`
      <div>
        <div class="phone-row">
          <div class="country-picker">
            <button
              type="button"
              class="country-trigger"
              @click=${this.toggleCountryMenu}
              ?disabled=${this.disabled || this.read_only}
              aria-haspopup="listbox"
              aria-expanded=${this.showCountryMenu ? 'true' : 'false'}
            >
              <span class="country-trigger-label">${option.name} (+${option.callingCode})</span>
              <span>${this.showCountryMenu ? '▲' : '▼'}</span>
            </button>

            ${this.showCountryMenu ? html`
              <div class="country-menu">
                <div class="country-search-wrap">
                  <input
                    class="country-search-input"
                    type="text"
                    placeholder="Search country or code"
                    .value=${this.countrySearchQuery}
                    @input=${this.handleCountrySearchInput}
                    @keydown=${this.handleCountrySearchKeydown}
                  />
                </div>
                <div class="country-list" role="listbox" aria-label="Country list">
                  ${this.filteredCountryOptions.length ? this.filteredCountryOptions.map((country) => html`
                    <button
                      type="button"
                      class="country-item ${country.code === this.selectedCountry ? 'selected' : ''}"
                      @click=${() => this.selectCountry(country.code)}
                    >
                      <span class="country-item-main">${country.flag} ${country.name}</span>
                      <span>+${country.callingCode}</span>
                    </button>
                  `) : html`
                    <div class="country-item-empty">No countries found</div>
                  `}
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
            class=${this.isInvalid ? 'invalid' : ''}
          />
        </div>
        <div class="format-description">
          Selected country code: +${option.callingCode}. Enter number without country prefix.
        </div>
      </div>
    `;
  }
}
