import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseField } from './base-field';

@customElement('shipthis-boolean-field')
export class ShipthisBooleanField extends BaseField {
  static styles = css`
    ${BaseField.styles}
    .checkbox-container {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }

    input[type="checkbox"] {
      width: 18px;
      height: 18px;
      cursor: pointer;
      accent-color: var(--qwc-primary);
      border: 1.5px solid var(--qwc-border);
      border-radius: 4px;
    }

    label {
      margin-bottom: 0;
      cursor: pointer;
      color: var(--qwc-text);
    }
  `;

  protected renderInput() {
    return html`
      <div class="checkbox-container" @click=${this.toggleChecked}>
        <input 
          type="checkbox" 
          .checked=${!!this.value}
          ?disabled=${this.disabled || this.read_only}
        />
        ${this.label ? html`<label>${this.label}</label>` : ''}
      </div>
    `;
  }

  // Override renderLabel because Boolean usually has label next to checkbox
  protected renderLabel() {
    return html``;
  }

  private toggleChecked() {
    if (this.disabled || this.read_only) return;
    this.value = !this.value;
    this.dispatchChange();
  }
}
