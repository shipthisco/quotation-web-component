import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseField } from './base-field';

@customElement('shipthis-text-field')
export class ShipthisTextField extends BaseField {
  protected renderInput() {
    return html`
      <input 
        type="text" 
        .value=${this.value || ''} 
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        ?readonly=${this.read_only}
        @input=${this.handleInput}
      />
    `;
  }
}
