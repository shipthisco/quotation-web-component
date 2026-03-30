import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseField } from './base-field';

@customElement('shipthis-text-field')
export class ShipthisTextField extends BaseField {
  protected renderInput() {
    const fieldType = String(this.field?.field_type || '').toLowerCase();
    const fieldId = String(this.fieldId || this.field?.field_id || '').toLowerCase();
    const label = String(this.label || this.field?.label || '').toLowerCase();
    const isEmailField = fieldType === 'email' || fieldId.includes('email') || label.includes('email');

    return html`
      <input 
        type=${isEmailField ? 'email' : 'text'}
        .value=${this.value || ''} 
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        ?readonly=${this.read_only}
        @input=${this.handleInput}
        @blur=${this.handleBlur}
      />
    `;
  }
}
