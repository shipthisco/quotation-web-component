import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { shipthisApi } from '../../service/shipthis.service';
import { conditionService } from '../../service/condition.service';
import './fields/field';
import './card';

@customElement('shipthis-quote-form')
export class ShipthisForm extends LitElement {
  
  @property({ attribute: false })
  cfg: any;  

  @state()
  private metadata: any = null;

  @property({ attribute: false })
  formData: Record<string, any> = {};

  @state()
  private currentStep = 0;

  @state()
  private activeAccordion: number[] = [0];

  @state()
  private activeTab = 0;

  static styles = css`
    :host {
      display: block;
    }

    /* ================================================
     * SHARED
     * ============================================= */
    .form-container {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .section-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 16px;
      color: var(--qwc-primary);
    }

    .card-title {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 12px;
      color: var(--qwc-text);
    }

    .fields-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    /* ================================================
     * STEPPER
     * ============================================= */
    .stepper-container {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .stepper-header {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 8px 12px 28px;
      position: relative;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .stepper-header::-webkit-scrollbar { display: none; }

    .step-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      min-width: 80px;
      position: relative;
      cursor: pointer;
      z-index: 1;
    }

    .step-item:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 18px;
      left: calc(50% + 18px);
      width: calc(100% - 36px);
      height: 2px;
      background: var(--qwc-border);
      z-index: 0;
      transition: background 0.3s ease;
    }

    .step-item.completed:not(:last-child)::after {
      background: var(--qwc-primary);
    }

    .step-circle {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 700;
      border: 2px solid var(--qwc-border);
      background: var(--qwc-bg);
      color: var(--qwc-text-muted);
      transition: all 0.25s ease;
      position: relative;
      z-index: 2;
    }

    .step-item.active .step-circle {
      background: var(--qwc-primary);
      border-color: var(--qwc-primary);
      color: #fff;
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--qwc-primary) 15%, transparent);
    }

    .step-item.completed .step-circle {
      background: var(--qwc-primary);
      border-color: var(--qwc-primary);
      color: #fff;
    }

    .step-label {
      margin-top: 8px;
      font-size: 11px;
      font-weight: 600;
      color: var(--qwc-text-muted);
      text-align: center;
      max-width: 90px;
      word-wrap: break-word;
      line-height: 1.2;
      transition: color 0.25s ease;
    }

    .step-item.active .step-label {
      color: var(--qwc-primary);
    }

    .step-content {
      padding: 4px 0 0;
      animation: step-fade 0.25s ease;
    }

    @keyframes step-fade {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .step-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0 0;
      margin-top: 16px;
      border-top: 1px solid var(--qwc-border);
    }

    .step-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 10px 20px;
      border-radius: var(--qwc-radius);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s ease;
      font-family: inherit;
    }

    .step-btn-back { background: var(--qwc-btn-clear-bg); border: 1.5px solid var(--qwc-btn-clear-border); color: var(--qwc-btn-clear-text); }
    .step-btn-back:hover { background: var(--qwc-surface); border-color: var(--qwc-primary); }
    .step-btn-next { background: var(--qwc-btn-submit-bg); border: none; color: var(--qwc-btn-submit-text); box-shadow: 0 2px 8px color-mix(in srgb, var(--qwc-btn-submit-bg) 30%, transparent); }
    .step-btn-next:hover { transform: translateY(-1px); filter: brightness(1.05); }

    .step-progress-text { font-size: 13px; color: var(--qwc-text-muted); font-weight: 500; }

    /* ================================================
     * ACCORDION
     * ============================================= */
    .accordion-container { display: flex; flex-direction: column; gap: 8px; }
    .accordion-item { border: 1px solid var(--qwc-border); border-radius: var(--qwc-radius); overflow: hidden; background: var(--qwc-bg); transition: all 0.2s ease; }
    .accordion-item.open { border-color: var(--qwc-primary); box-shadow: 0 4px 12px color-mix(in srgb, var(--qwc-primary) 10%, transparent); }
    .accordion-header { padding: 16px 20px; background: var(--qwc-surface); cursor: pointer; display: flex; align-items: center; justify-content: space-between; user-select: none; }
    .accordion-item.open .accordion-header { background: var(--qwc-bg); border-bottom: 1px solid var(--qwc-border); }
    .accordion-title { font-size: 15px; font-weight: 600; color: var(--qwc-text); display: flex; align-items: center; gap: 10px; }
    .accordion-item.open .accordion-title { color: var(--qwc-primary); }
    .accordion-icon { transition: transform 0.3s ease; color: var(--qwc-text-muted); }
    .accordion-item.open .accordion-icon { transform: rotate(180deg); color: var(--qwc-primary); }
    .accordion-content { padding: 20px; display: none; }
    .accordion-item.open .accordion-content { display: block; animation: slide-down 0.3s ease-out; }
    @keyframes slide-down { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

    /* ================================================
     * TABS
     * ============================================= */
    .tabs-header { 
      display: flex; 
      gap: 12px; 
      border-bottom: 1px solid var(--qwc-border); 
      margin-bottom: 24px; 
      overflow-x: auto; 
      scrollbar-width: none;
      padding: 4px 0;
    }
    .tabs-header::-webkit-scrollbar { display: none; }
    
    .tab-item { 
      padding: 10px 18px; 
      font-size: 14px; 
      font-weight: 600; 
      color: var(--qwc-text-muted); 
      cursor: pointer; 
      position: relative; 
      white-space: nowrap; 
      border-radius: var(--qwc-radius);
      transition: all 0.2s ease;
    }
    .tab-item:hover {
      background: var(--qwc-surface);
      color: var(--qwc-text);
    }
    .tab-item.active { 
      color: var(--qwc-primary); 
      background: color-mix(in srgb, var(--qwc-primary) 8%, transparent);
    }
    .tab-item.active::after { 
      content: ''; 
      position: absolute; 
      bottom: -4px; 
      left: 15%; 
      width: 70%; 
      height: 3px; 
      background: var(--qwc-primary); 
      border-radius: 2px;
    }
    .tab-content { animation: tab-fade 0.3s ease; }
    @keyframes tab-fade { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  `;

  // Flatten logic: Treat each CARD as a standalone "unit" for UI layouts
  private get formLayoutUnits() {
    if (!this.metadata?.meta?.sections) return [];
    const units: { id: string; name: string; type: 'card'; data: any }[] = [];
    
    this.metadata.meta.sections.forEach((section: any) => {
      if (section.name === 'Hidden') return;
      section.cards?.forEach((card: any, idx: number) => {
        if (card.hidden) return;
        units.push({
          id: `${section.name}-${card.name}-${idx}`,
          name: card.name || section.name,
          type: 'card',
          data: card
        });
      });
    });
    return units;
  }

  async firstUpdated() {
    this.metadata = await shipthisApi.getMetadata(this.cfg.apiKey, this.cfg.organisationId);
    this.notifyFormChange();
  }

  render() {
    if (!this.metadata) return html`<slot name="loader"></slot>`;
    const layout = this.cfg?.layout || 'fullform';

    switch (layout) {
      case 'stepper': return this.renderStepper();
      case 'accordion': return this.renderAccordion();
      case 'tabs': return this.renderTabs();
      default: return this.renderFullForm();
    }
  }

  private renderFullForm() {
    const sections = (this.metadata?.meta?.sections || []).filter((s: any) => s.name !== 'Hidden');
    return html`
      <div class="form-container">
        ${sections.map((section: any) => html`
          <div class="section">
            <h2 class="section-title">${section.name}</h2>
            <div class="cards-container">
              ${section.cards?.filter((c: any) => !c.hidden).map((c: any) => this.renderCard(c))}
            </div>
          </div>
        `)}
      </div>
    `;
  }

  private renderStepper() {
    const units = this.formLayoutUnits;
    const total = units.length;
    const current = Math.min(this.currentStep, total - 1);
    const activeUnit = units[current];

    return html`
      <div class="stepper-container">
        <div class="stepper-header">
          ${units.map((unit, i) => html`
            <div class="step-item ${i === current ? 'active' : ''} ${i < current ? 'completed' : ''}" @click=${() => this.currentStep = i}>
              <div class="step-circle">
                ${i < current ? html`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>` : i + 1}
              </div>
              <span class="step-label">${unit.name}</span>
            </div>
          `)}
        </div>

        <div class="step-content" .key=${current}>
          ${this.renderCard(activeUnit.data)}
        </div>

        <div class="step-nav">
          ${current > 0 ? html`
            <button class="step-btn step-btn-back" @click=${() => this.currentStep--}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              Back
            </button>
          ` : html`<div></div>`}
          <span class="step-progress-text">${current + 1} / ${total}</span>
          ${current < total - 1 ? html`
            <button class="step-btn step-btn-next" @click=${() => this.currentStep++}>
              Next
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          ` : html`<div></div>`}
        </div>
      </div>
    `;
  }

  private renderAccordion() {
    const units = this.formLayoutUnits;
    return html`
      <div class="accordion-container">
        ${units.map((unit, i) => {
          const isOpen = this.activeAccordion.includes(i);
          return html`
            <div class="accordion-item ${isOpen ? 'open' : ''}">
              <div class="accordion-header" @click=${() => this.toggleAccordion(i)}>
                <div class="accordion-title">
                  <span style="color:#94a3b8; font-size:13px; min-width:20px;">${i + 1}.</span>
                  ${unit.name}
                </div>
                <svg class="accordion-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div class="accordion-content">
                ${this.renderCard(unit.data)}
              </div>
            </div>
          `;
        })}
      </div>
    `;
  }

  private renderTabs() {
    const units = this.formLayoutUnits;
    const activeUnit = units[this.activeTab];
    return html`
      <div class="tabs-container">
        <div class="tabs-header">
          ${units.map((unit, i) => html`
            <div class="tab-item ${this.activeTab === i ? 'active' : ''}" @click=${() => this.activeTab = i}>
              ${unit.name}
            </div>
          `)}
        </div>
        <div class="tab-content" .key=${this.activeTab}>
          ${this.renderCard(activeUnit.data)}
        </div>
      </div>
    `;
  }

  private toggleAccordion(index: number) {
    if (this.activeAccordion.includes(index)) this.activeAccordion = this.activeAccordion.filter(i => i !== index);
    else this.activeAccordion = [...this.activeAccordion, index];
  }

  private renderCard(card: any) {
    if (!card) return html``;
    return html`
      <shipthis-quote-card style="display: block; margin-bottom: 12px;">
        <h3 class="card-title">${card.name}</h3>
        <div class="fields-grid">
          ${card.fields?.filter((f: any) => !f.attributes?.hidden).map((f: any) => this.renderField(f))}
        </div>
      </shipthis-quote-card>
    `;
  }

  private renderField(field: any) {
    const fieldWidth = field.field_meta?.field_width?.width || 100;
    const style = `width: calc(${fieldWidth}% - 16px); min-width: 250px; flex-grow: 1;`;
    if (field.attributes?.hidden) return html``;

    return html`
      <shipthis-field
        style=${style} .field=${field} .label=${field.label} .type=${field.field_type || field.type}
        .required=${field.required} .placeholder=${field.placeholder || ''} .hint_message=${field.hint_message || ''}
        .hide_label=${field.attributes?.hide_label || false} .read_only=${field.attributes?.read_only || false}
        .disabled=${field.attributes?.disabled || false} .max_value=${field.attributes?.max_value}
        .min_value=${field.attributes?.min_value} .lines=${field.attributes?.lines || 2}
        .value=${this.formData[field.field_id] || ''} .fieldId=${field.field_id}
        .opData=${this.formData} .conditions=${{ __direct: this.formData }}
        @field-change=${(e: any) => this.handleFieldChange(field.field_id, e.detail.value, e.detail)}
      ></shipthis-field>
    `;
  }

  /* ================================================
   * DATA & VALIDATION
   * ============================================= */

  private fieldValidation: Record<string, boolean> = {};

  private handleFieldChange(fieldId: string, value: any, detail: any) {
    this.formData = { ...this.formData, [fieldId]: value };
    this.fieldValidation[fieldId] = detail.isInvalid === true;
    this.notifyFormChange();
  }

  private notifyFormChange() {
    this.dispatchEvent(new CustomEvent('form-change', {
      detail: { formData: this.formData, isValid: this.isFormValid() },
      bubbles: true, composed: true
    }));
  }

  private isFormValid(): boolean {
    if (Object.values(this.fieldValidation).some(v => v)) return false;
    let allRequiredPresent = true;
    this.metadata?.meta?.sections?.forEach((s: any) => {
      s.cards?.forEach((c: any) => {
        c.fields?.forEach((f: any) => {
          if (f.attributes?.required && !this.isFieldHidden(f) && !this.formData[f.field_id]) allRequiredPresent = false;
        });
      });
    });
    return allRequiredPresent;
  }

  private isFieldHidden(f: any): boolean {
    if (f.attributes?.hidden) return true;
    const adv = f?.advanced_attributes;
    if (!adv || !adv.enable_conditions) return false;
    if (adv.enable_direct_show_condition && adv.direct_show_condition_name) {
      return !conditionService.evaluateCondition(adv.direct_show_condition_name, adv.direct_show_condition_value, this.formData);
    }
    if (adv.enable_direct_hidden_condition && adv.direct_hidden_condition_name) {
      return conditionService.evaluateCondition(adv.direct_hidden_condition_name, adv.direct_hidden_condition_value, this.formData);
    }
    return false;
  }

  public validateForm(): boolean {
    const fields = this.shadowRoot?.querySelectorAll('shipthis-field') || [];
    let isValid = true;
    fields.forEach((f: any) => {
      if (typeof f.validate === 'function' && !f.validate()) isValid = false;
    });
    return isValid;
  }

  public resetForm() {
    this.formData = {}; this.fieldValidation = {}; this.currentStep = 0;
    this.activeAccordion = [0]; this.activeTab = 0;
    this.requestUpdate(); this.notifyFormChange();
  }
}