import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { getComponentForField } from './registry';
import { conditionService } from '../../../service/condition.service';

// Import all field components
import './text-field';
import './textarea-field';
import './boolean-field';
import './number-field';
import './currency-field';
import './reference-field';
import './embed-field';
import './list-embed-field';
import './location-field';
import './phone-field';
import './empty-field';
import './dropdown-field';
import './date-field';
import './datetime-field';

@customElement('shipthis-field')
export class ShipthisField extends LitElement {
  @property({ type: Object }) field: any = {};
  @property() label = '';
  @property() type = '';
  @property() value: any = '';
  @property({ type: Boolean }) required = false;
  @property({ type: Array }) options: any[] = [];
  @property() placeholder = '';
  
  // New properties to sync with monorepo
  @property({ type: Object }) opData: any = {};
  @property({ type: Object }) conditions: any = {};
  @property({ type: Object }) global_op_data: any = {};
  @property() collection = '';
  @property() operation = 'Add';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) read_only = false;
  @property() hint_message = '';
  @property() help_text = '';
  @property() field_appearance = 'fill';
  @property() field_class = '';
  @property({ type: Number }) max_value: number | null = null;
  @property({ type: Number }) min_value: number | null = null;
  @property({ type: Boolean }) hide_label = false;
  @property({ type: Object }) field_width: any = {};
  @property({ type: Number }) lines = 2;
  @property() fieldId = '';
  @property() condition_base_key = '';
  @property({ type: Boolean }) hide_title = false;
  @property({ type: Boolean }) allow_add_button = true;
  @property() base_currency = '';
  @property() prefix_text = '';
  @property() default_country = '';

  get isHidden(): boolean {
    if (this.field?.attributes?.hidden) return true;
    
    const adv = this.field?.advanced_attributes;
    if (!adv || !adv.enable_conditions) return false;

    if (adv.enable_direct_show_condition && adv.direct_show_condition_name) {
      return !conditionService.evaluateCondition(
        adv.direct_show_condition_name, 
        adv.direct_show_condition_value, 
        this.conditions?.__direct,
        this.condition_base_key
      );
    }

    if (adv.enable_direct_hidden_condition && adv.direct_hidden_condition_name) {
      return conditionService.evaluateCondition(
        adv.direct_hidden_condition_name, 
        adv.direct_hidden_condition_value, 
        this.conditions?.__direct,
        this.condition_base_key
      );
    }

    return false;
  }

  get isRequired(): boolean {
    let req = this.required || this.field?.attributes?.required;
    const adv = this.field?.advanced_attributes;
    
    // Honor explicit required set by parent integrations.
    if (!this.required && adv?.enable_conditions && adv?.enable_direct_required_condition && adv?.direct_required_condition_name) {
      req = conditionService.evaluateCondition(
        adv.direct_required_condition_name,
        adv.direct_required_condition_value,
        this.conditions?.__direct,
        this.condition_base_key
      );
    }
    return !!req;
  }

  get isReadOnly(): boolean {
    let ro = this.read_only || this.field?.attributes?.read_only;
    const adv = this.field?.advanced_attributes;

    if (adv?.enable_conditions && adv?.enable_direct_read_only_condition && adv?.direct_read_only_condition_name) {
      ro = conditionService.evaluateCondition(
        adv.direct_read_only_condition_name,
        adv.direct_read_only_condition_value,
        this.conditions?.__direct,
        this.condition_base_key
      );
    }
    return !!ro;
  }

  render() {
    if (this.isHidden) {
      this.style.display = 'none';
      return html``;
    }
    this.style.display = '';

    const type = this.type || this.field?.field_type || 'single_line';
    const required = this.isRequired;
    const readOnly = this.isReadOnly;
    
    switch (type) {
      case 'single_line':
        return html`<shipthis-text-field 
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${required} .placeholder=${this.placeholder}
          .fieldId=${this.fieldId || this.field?.field_id} .disabled=${this.disabled} .read_only=${readOnly} 
          .hint_message=${this.hint_message} .max_value=${this.max_value} .min_value=${this.min_value}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-text-field>`;
      case 'multi_line':
        return html`<shipthis-textarea-field 
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${required} .placeholder=${this.placeholder}
          .fieldId=${this.fieldId || this.field?.field_id} .disabled=${this.disabled} .read_only=${readOnly} 
          .hint_message=${this.hint_message} .lines=${this.lines}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-textarea-field>`;
      case 'boolean':
      case 'yes_no':
        return html`<shipthis-boolean-field 
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${required} 
          .fieldId=${this.fieldId || this.field?.field_id} .disabled=${this.disabled} .read_only=${readOnly}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-boolean-field>`;
      case 'number':
        return html`<shipthis-number-field 
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${required} .placeholder=${this.placeholder}
          .fieldId=${this.fieldId || this.field?.field_id} .disabled=${this.disabled} .read_only=${readOnly} 
          .max_value=${this.max_value} .min_value=${this.min_value}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-number-field>`;
      case 'currency':
        return html`<shipthis-currency-field 
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${required} .placeholder=${this.placeholder}
          .fieldId=${this.fieldId || this.field?.field_id} .disabled=${this.disabled} .read_only=${readOnly} 
          .base_currency=${this.base_currency} .prefix_text=${this.prefix_text}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-currency-field>`;
      case 'reference':
        return html`<shipthis-reference-field 
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${required} .placeholder=${this.placeholder}
          .fieldId=${this.fieldId || this.field?.field_id} .disabled=${this.disabled} .read_only=${readOnly}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          .opData=${this.opData} .global_op_data=${this.global_op_data}
          @field-change=${this.handleFieldChange}></shipthis-reference-field>`;
      case 'embed':
        return html`<shipthis-embed-field 
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${required} 
          .fieldId=${this.fieldId || this.field?.field_id} .opData=${this.opData}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-embed-field>`;
      case 'list_embed':
        return html`<shipthis-list-embed-field 
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${required} 
          .fieldId=${this.fieldId || this.field?.field_id}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-list-embed-field>`;
      case 'drop_down':
        return html`<shipthis-dropdown-field
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${required} 
          .fieldId=${this.fieldId || this.field?.field_id} .disabled=${this.disabled} .read_only=${readOnly}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-dropdown-field>`;
      case 'date':
        return html`<shipthis-date-field
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${required} 
          .fieldId=${this.fieldId || this.field?.field_id} .disabled=${this.disabled} .read_only=${readOnly}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-date-field>`;
      case 'location':
        return html`<shipthis-location-field
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${required} 
          .fieldId=${this.fieldId || this.field?.field_id} .disabled=${this.disabled} .read_only=${readOnly}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-location-field>`;
      case 'date_time':
        return html`<shipthis-datetime-field
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${required} 
          .fieldId=${this.fieldId || this.field?.field_id} .disabled=${this.disabled} .read_only=${readOnly}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-datetime-field>`;
      case 'phone':
        return html`<shipthis-phone-field
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${required} .placeholder=${this.placeholder}
          .fieldId=${this.fieldId || this.field?.field_id} .disabled=${this.disabled} .read_only=${readOnly}
          .default_country=${this.default_country}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-phone-field>`;
      case 'json':
        return html`<div class="json-field" style="font-family: monospace; font-size: 11px; white-space: pre-wrap; overflow: hidden;">${JSON.stringify(this.value, null, 2)}</div>`;
      case 'empty':
        return html`<shipthis-empty-field
          .fieldWidth=${this.field_width}
        ></shipthis-empty-field>`;
      default:
        return html`<shipthis-text-field 
          .field=${this.field} .label=${this.label} .value=${this.value} .required=${required}
          .fieldId=${this.fieldId || this.field?.field_id} .disabled=${this.disabled} .read_only=${readOnly}
          .hide_label=${this.hide_label} .field_width=${this.field_width}
          @field-change=${this.handleFieldChange}></shipthis-text-field>`;
    }
  }

  private handleFieldChange(e: CustomEvent) {
    e.stopPropagation(); // Stop the inner component's event from bubbling further
    this.value = e.detail.value;
    
    // Re-dispatch the event with additional metadata if needed
    this.dispatchEvent(new CustomEvent('field-change', {
      detail: e.detail,
      bubbles: true,
      composed: true
    }));
  }

  /**
   * Validates the inner field.
   */
  public validate(): boolean {
    const innerField = this.shadowRoot?.firstElementChild as any;
    if (innerField && typeof innerField.validate === 'function') {
      return innerField.validate();
    }
    return true;
  }
}
