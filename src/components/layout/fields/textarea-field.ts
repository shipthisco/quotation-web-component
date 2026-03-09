import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseField } from './base-field';

@customElement('shipthis-textarea-field')
export class ShipthisTextareaField extends BaseField {
  static styles = css`
    ${BaseField.styles}
    textarea {
      resize: vertical;
      min-height: 80px;
    }
  `;

  protected renderInput() {
    return html`
      <textarea 
        .value=${this.value || ''} 
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        ?readonly=${this.read_only}
        rows=${this.lines || 3}
        @input=${this.handleInput}
      ></textarea>
    `;
  }
}
