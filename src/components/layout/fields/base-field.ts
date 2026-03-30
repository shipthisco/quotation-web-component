import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import { validatorService } from '../../../service/validator.service';

export abstract class BaseField extends LitElement {
  @property({ type: Object }) field: any;
  @property({ type: String }) label: string = '';
  @property({ type: String }) value: any;
  @property({ type: Boolean }) required: boolean = false;
  @property({ type: String }) placeholder: string = '';
  @property({ type: Boolean }) disabled: boolean = false;
  @property({ type: Boolean }) read_only: boolean = false;
  @property({ type: String }) hint_message: string = '';
  @property({ type: String }) prefix_text: string = '';
  @property({ type: String }) base_currency: string = '';
  @property({ type: Boolean }) hide_label: boolean = false;
  @property({ type: Boolean }) hide_title: boolean = false; // Added support for hide_title
  @property({ type: Number }) lines: number = 2;
  @property({ type: String }) fieldId: string = '';
  @property({ type: Number }) max_value: number | null = null;
  @property({ type: Number }) min_value: number | null = null;

  @state() protected isInvalid: boolean = false;
  @state() protected errorMessage: string = '';

  static styles = css`
    :host {
      display: block;
      margin-bottom: 20px;
      font-family: inherit;
    }

    .field-container {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    label {
      font-size: 13px;
      font-weight: 500;
      color: var(--qwc-field-label, var(--qwc-text-muted));
      margin-bottom: 2px;
    }

    .required-star {
      color: var(--qwc-error);
      margin-left: 2px;
    }

    input, textarea, select {
      padding: 10px 12px;
      border: 1.5px solid var(--qwc-border);
      border-radius: var(--qwc-radius);
      font-size: 14px;
      transition: all 0.2s ease;
      background: var(--qwc-surface);
      color: var(--qwc-text);
      width: 100%;
      box-sizing: border-box;
      outline: none;
    }

    input:focus, textarea:focus, select:focus {
      border-color: var(--qwc-primary);
      background: var(--qwc-bg);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--qwc-primary) 10%, transparent);
    }

    input:disabled, textarea:disabled, select:disabled {
      background: var(--qwc-surface);
      cursor: not-allowed;
      opacity: 0.7;
    }

    .hint {
      font-size: 11px;
      color: var(--qwc-text-muted);
      margin-top: 2px;
    }

    /* Error States */
    .field-container.invalid input,
    .field-container.invalid textarea,
    .field-container.invalid select {
      border-color: var(--qwc-error);
      background: color-mix(in srgb, var(--qwc-error) 5%, var(--qwc-bg));
    }

    .field-container.invalid input:focus,
    .field-container.invalid textarea:focus,
    .field-container.invalid select:focus {
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--qwc-error) 10%, transparent);
    }

    .error-message {
      font-size: 11px;
      color: var(--qwc-error);
      margin-top: 2px;
      font-weight: 500;
    }
  `;

  render() {
    return html`
      <div class="field-container ${this.isInvalid ? 'invalid' : ''}">
        ${this.renderLabel()}
        ${this.renderInput()}
        ${this.isInvalid ? html`<div class="error-message">${this.errorMessage}</div>` : ''}
        ${this.hint_message && !this.isInvalid ? html`<div class="hint">${this.hint_message}</div>` : ''}
      </div>
    `;
  }

  protected renderLabel() {
    if (this.hide_label || this.hide_title || !this.label) return html``;
    return html`
      <label>
        ${this.label}
        ${this.required ? html`<span class="required-star">*</span>` : ''}
      </label>
    `;
  }

  protected abstract renderInput(): any;

  protected handleInput(e: Event) {
    const input = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.value = input.value;
    this.validate();
    this.dispatchChange();
  }

  protected handleBlur() {
    this.validate();
    this.dispatchChange();
  }

  private isEmailLikeField(): boolean {
    const fieldType = String(this.field?.field_type || '').toLowerCase();
    const fieldId = String(this.fieldId || this.field?.field_id || '').toLowerCase();
    const label = String(this.label || this.field?.label || '').toLowerCase();
    const example = String(this.field?.field_meta?.example || '').toLowerCase();

    if (fieldType === 'email') return true;
    if (fieldId.includes('email')) return true;
    if (label.includes('email')) return true;
    if (example.includes('@')) return true;
    return false;
  }

  /**
   * Performs validation on the field.
   * Updates isInvalid and errorMessage states.
   * @returns true if valid, false otherwise.
   */
  public validate(): boolean {
    this.isInvalid = false;
    this.errorMessage = '';
    const value = typeof this.value === 'string' ? this.value.trim() : this.value;

    // Required check
    if (this.required) {
      const error = validatorService.validateRequired(value);
      if (error) {
        this.isInvalid = true;
        this.errorMessage = error;
        return false;
      }
    }

    if (this.isEmailLikeField()) {
      const error = validatorService.validateEmail(value);
      if (error) {
        this.isInvalid = true;
        this.errorMessage = this.field?.field_meta?.example
          ? `Invalid email address. Example: ${this.field.field_meta.example}`
          : error;
        return false;
      }
    }

    // Regex check (standard for text fields)
    if (this.field?.field_meta?.enable_regex && this.field?.field_meta?.regex) {
      const error = validatorService.validateRegex(
        value, 
        this.field.field_meta.regex, 
        this.field.field_meta.example
      );
      if (error) {
        this.isInvalid = true;
        this.errorMessage = error;
        return false;
      }
    }

    // Type-specific automatic validation
    const type = this.field?.field_type;
    if (type === 'email') {
      const error = validatorService.validateEmail(value);
      if (error) {
        this.isInvalid = true;
        this.errorMessage = error;
        return false;
      }
    } else if (type === 'url') {
      const error = validatorService.validateUrl(value);
      if (error) {
        this.isInvalid = true;
        this.errorMessage = error;
        return false;
      }
    }

    return true;
  }

  protected dispatchChange() {
    this.dispatchEvent(new CustomEvent('field-change', {
      detail: { 
        value: this.value,
        fieldId: this.fieldId || this.field?.field_id,
        isInvalid: this.isInvalid,
        errorMessage: this.errorMessage
      },
      bubbles: true,
      composed: true
    }));
  }
}
