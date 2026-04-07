import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseField } from './base-field';

@customElement('shipthis-list-embed-field')
export class ShipthisListEmbedField extends BaseField {
  @property({ type: Object }) opData: any = {};
  @property({ type: Object }) conditions: any = {};
  @property() condition_base_key: string = '';

  static styles = css`
    ${BaseField.styles}
    .list-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .list-item {
      border: 1px solid #e2e8f0;
      padding: 16px;
      border-radius: 8px;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    .remove-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff1f2;
      border: 1px solid #fecada;
      color: #e11d48;
      border-radius: 50%;
      cursor: pointer;
      font-size: 10px;
      transition: all 0.2s ease;
      z-index: 10;
    }

    .remove-btn:hover {
      background: #ffe4e6;
      border-color: #fda4af;
      color: #be123c;
      transform: scale(1.1);
    }

    .remove-btn:active {
      transform: scale(0.95);
    }

    .add-btn {
      align-self: flex-start;
      margin-top: 12px;
      padding: 8px 16px;
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      color: #334155;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }

    .add-btn:hover {
      background: #f8fafc;
      border-color: #94a3b8;
      color: #1e293b;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .add-btn:active {
      background: #f1f5f9;
      transform: translateY(0);
    }
  `;

  protected renderInput() {
    const items = Array.isArray(this.value) ? this.value : [];
    const fields = (this.field?.fields || []).filter((f: any) => !f.attributes?.hidden);

    return html`
      <div class="list-container">
        ${items.map((item, index) => html`
          <div class="list-item">
            <button class="remove-btn" @click=${() => this.removeItem(index)}>✕</button>
            ${fields.map((f: any) => {
              const fieldWidth = f.field_meta?.field_width?.width || 100;
              const style = `width: calc(${fieldWidth}% - 16px); min-width: min(200px, 100%); max-width: 100%; flex-grow: 1;`;
              return html`
                <shipthis-field
                  style=${style}
                  .field=${f}
                  .label=${f.label}
                  .type=${f.field_type}
                  .value=${item[f.field_id] || ''}
                  .fieldId=${f.field_id}
                  .opData=${this.opData}
                  .conditions=${this.conditions}
                  .condition_base_key=${this.condition_base_key ? `${this.condition_base_key}${this.fieldId}.${index}.` : `${this.fieldId}.${index}.`}
                  .hide_label=${f.attributes?.hide_label || false}
                  @field-change=${(e: any) => this.handleItemFieldChange(index, f.field_id, e.detail.value, e)}
                ></shipthis-field>
              `;
            })}
          </div>
        `)}
        <button class="add-btn" @click=${this.addItem}>+ Add Item</button>
      </div>
    `;
  }

  private addItem() {
    const items = Array.isArray(this.value) ? [...this.value] : [];
    items.push({});
    this.value = items;
    this.dispatchChange();
  }

  private removeItem(index: number) {
    const items = Array.isArray(this.value) ? [...this.value] : [];
    items.splice(index, 1);
    this.value = items;
    this.dispatchChange();
  }

  private handleItemFieldChange(index: number, subFieldId: string, newValue: any, e: CustomEvent) {
    if (e) e.stopPropagation();
    const items = Array.isArray(this.value) ? [...this.value] : [];
    items[index] = { ...items[index], [subFieldId]: newValue };
    this.value = items;
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
