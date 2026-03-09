import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseField } from './base-field';

@customElement('shipthis-dropdown-field')
export class ShipthisDropdownField extends BaseField {
  static styles = css`
    ${BaseField.styles}
  `;

  protected handleInput(e: Event) {
    const target = e.target as HTMLSelectElement;
    this.value = target.value;
    this.validate();
    this.dispatchChange();
  }

  protected renderInput() {
    const choices = this.field?.field_meta?.choices || [];
    const blankChoice = this.field?.field_meta?.blank_choice !== false;

    return html`
      <select 
        .value=${this.value || ''}
        @change=${this.handleInput}
        ?disabled=${this.disabled || this.read_only}
      >
        ${blankChoice ? html`<option value="">Select an option</option>` : ''}
        ${choices.map((choice: any) => html`
          <option value=${choice.value} ?selected=${this.value === choice.value}>
            ${choice.display || choice.label || choice.value}
          </option>
        `)}
      </select>
    `;
  }
}
