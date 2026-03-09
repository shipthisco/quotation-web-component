import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseField } from './base-field';

@customElement('shipthis-currency-field')
export class ShipthisCurrencyField extends BaseField {
  static styles = css`
    ${BaseField.styles}
    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }

    .prefix {
      position: absolute;
      left: 12px;
      color: #64748b;
      font-size: 14px;
      pointer-events: none;
    }

    input {
      padding-left: 32px;
    }

    .reference-container {
      position: relative;
    }
    
    .loader {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 12px;
      color: #64748b;
    }
  `;

  protected renderInput() {
    return html`
      <div class="input-wrapper">
        <span class="prefix">${this.prefix_text || this.base_currency || '$'}</span>
        <input 
          type="number" 
          .value=${this.value} 
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          ?readonly=${this.read_only}
          @input=${this.handleInput}
        />
      </div>
    `;
  }

  protected handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value === '' ? null : Number(target.value);
    this.validate();
    this.dispatchChange();
  }
}
