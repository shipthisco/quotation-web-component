import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { BaseField } from './base-field';
import { parsePhoneNumberFromString, PhoneNumber } from 'libphonenumber-js';

@customElement('shipthis-phone-field')
export class ShipthisPhoneField extends BaseField {
  @state() private countryFlag = '';

  static styles = css`
    ${BaseField.styles}
    .phone-input-container {
      position: relative;
      display: flex;
      align-items: center;
    }
    .flag-icon {
      position: absolute;
      left: 12px;
      font-size: 1.25rem;
      pointer-events: none;
    }
    input {
      padding-left: 45px !important;
    }
    .call-btn {
      position: absolute;
      right: 12px;
      background: none;
      border: none;
      cursor: pointer;
      color: #3b82f6;
      display: flex;
      align-items: center;
      padding: 4px;
      border-radius: 4px;
      transition: background 0.2s;
    }
    .call-btn:hover {
      background: #eff6ff;
    }
    .call-btn svg {
      width: 18px;
      height: 18px;
    }
  `;

  protected firstUpdated() {
    if (this.value) {
      this.updateCountryFlag(String(this.value));
    }
  }

  protected handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    let val = target.value;

    this.updateCountryFlag(val);
    this.value = val;
    this.validate();
    this.dispatchChange();
  }

  private updateCountryFlag(value: string) {
    let pn: PhoneNumber | undefined;
    try {
      pn = parsePhoneNumberFromString(value);
      if (!pn && !value.startsWith('+')) {
        pn = parsePhoneNumberFromString('+' + value.replace(/\D/g, ''));
      }
    } catch {
      pn = undefined;
    }

    this.countryFlag = pn && pn.country ? this.getFlagEmoji(pn.country) : '';
  }

  private getFlagEmoji(iso: string): string {
    return iso
      .toUpperCase()
      .split('')
      .map((c) => String.fromCodePoint(127397 + c.charCodeAt(0)))
      .join('');
  }

  public validate(): boolean {
    const raw = String(this.value || '').trim();
    if (!raw) {
      this.isInvalid = this.required || !!this.field?.attributes?.required;
      this.errorMessage = this.isInvalid ? 'This field is required' : '';
      return !this.isInvalid;
    }

    let pn = parsePhoneNumberFromString(raw);
    if (!pn && !raw.startsWith('+')) {
      pn = parsePhoneNumberFromString('+' + raw.replace(/\D/g, ''));
    }

    const isValid = !!(pn && pn.isValid());
    this.isInvalid = !isValid;
    this.errorMessage = !isValid ? 'Please enter a valid phone number' : '';
    
    return isValid;
  }

  private callNumber() {
    if (this.value) {
      const sanitized = String(this.value).replace(/\s+/g, '');
      window.open(`tel:${sanitized}`, '_self');
    }
  }

  protected renderInput() {
    const isValid = !this.isInvalid && this.value;

    return html`
      <div class="phone-input-container">
        ${this.countryFlag ? html`<span class="flag-icon">${this.countryFlag}</span>` : ''}
        <input
          type="tel"
          .value=${this.value || ''}
          placeholder=${this.placeholder || 'Enter phone number'}
          ?disabled=${this.disabled}
          ?readonly=${this.read_only}
          @input=${this.handleInput}
          class=${this.isInvalid ? 'invalid' : ''}
        />
        ${isValid ? html`
          <button class="call-btn" @click=${this.callNumber} title="Call this number">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </button>
        ` : ''}
      </div>
    `;
  }
}
