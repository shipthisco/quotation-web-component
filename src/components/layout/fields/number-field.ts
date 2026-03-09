import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseField } from './base-field';
import { validatorService } from '../../../service/validator.service';

@customElement('shipthis-number-field')
export class ShipthisNumberField extends BaseField {
  protected renderInput() {
    return html`
      <input 
        type="number" 
        .value=${this.value} 
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        ?readonly=${this.read_only}
        .max=${this.max_value !== null ? String(this.max_value) : ''}
        .min=${this.min_value !== null ? String(this.min_value) : ''}
        @input=${this.handleInput}
      />
    `;
  }

  protected handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value === '' ? null : Number(target.value);
    this.validate();
    this.dispatchChange();
  }

  public validate(): boolean {
    if (!super.validate()) return false;

    if (this.value !== null && (this.min_value !== null || this.max_value !== null)) {
      const error = validatorService.validateNumberRange(
        this.value, 
        this.min_value ?? undefined, 
        this.max_value ?? undefined
      );
      if (error) {
        this.isInvalid = true;
        this.errorMessage = error;
        return false;
      }
    }
    return true;
  }
}
