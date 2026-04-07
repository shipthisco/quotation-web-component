import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseField } from './base-field';

@customElement('shipthis-embed-field')
export class ShipthisEmbedField extends BaseField {
  @property({ type: Object }) opData: any = {};
  @property({ type: Object }) conditions: any = {};
  @property() condition_base_key: string = '';

  static styles = css`
    ${BaseField.styles}
    .embed-container {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      border-left: 2px solid #e2e8f0;
      padding-left: 16px;
      margin-top: 8px;
    }
  `;

  protected renderInput() {
    const fields = (this.field?.fields || []).filter((f: any) => !f.attributes?.hidden);
    return html`
      <div class="embed-container">
        ${fields.map((f: any) => {
          const fieldWidth = f.field_meta?.field_width?.width || 100;
          const style = `width: calc(${fieldWidth}% - 16px); min-width: min(250px, 100%); max-width: 100%; flex-grow: 1;`;
          return html`
            <shipthis-field
              style=${style}
              .field=${f}
              .label=${f.label}
              .type=${f.field_type}
              .value=${this.value?.[f.field_id] || ''}
              .fieldId=${f.field_id}
              .opData=${this.opData}
              .conditions=${this.conditions}
              .condition_base_key=${this.condition_base_key ? `${this.condition_base_key}${this.fieldId}.` : `${this.fieldId}.`}
              .hide_label=${f.attributes?.hide_label || false}
              @field-change=${(e: any) => this.handleSubFieldChange(f.field_id, e.detail.value, e)}
            ></shipthis-field>
          `;
        })}
      </div>
    `;
  }

  private handleSubFieldChange(subFieldId: string, newValue: any, e: CustomEvent) {
    if (e) e.stopPropagation();
    if (!this.value || typeof this.value !== 'object') {
      this.value = {};
    }
    this.value = { ...this.value, [subFieldId]: newValue };
    this.dispatchChange();
  }

  public validate(): boolean {
    const fields = this.shadowRoot?.querySelectorAll('shipthis-field') || [];
    let isValid = true;
    fields.forEach((field: any) => {
      if (typeof field.validate === 'function') {
        if (!field.validate()) isValid = false;
      }
    });
    return isValid;
  }
}
