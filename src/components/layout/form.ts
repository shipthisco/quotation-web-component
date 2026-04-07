import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
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

  @query('.stepper-header')
  private stepperHeaderEl!: HTMLElement | null;

  private centerStepRaf: number | null = null;
  private stepTopRaf: number | null = null;
  private mobileFocusRaf: number | null = null;
  private stepperScrollTimeout: number | null = null;

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
      color: var(--qwc-card-title, var(--qwc-text));
    }

    .fields-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    .fields-grid > * {
      min-width: 0;
      max-width: 100%;
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
      justify-content: flex-start;
      padding: 8px 12px 28px;
      position: relative;
      overflow-x: auto;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
      touch-action: pan-x;
      overscroll-behavior-x: contain;
      scroll-snap-type: x proximity;
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
      scroll-snap-align: center;
      border: none;
      background: transparent;
      padding: 0;
      appearance: none;
      -webkit-appearance: none;
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
      color: var(--qwc-step-label, var(--qwc-text-muted));
      text-align: center;
      max-width: 90px;
      word-wrap: break-word;
      line-height: 1.2;
      transition: color 0.25s ease;
    }

    .step-item.active .step-label {
      color: var(--qwc-step-label-active, var(--qwc-primary));
    }

    .step-item:focus-visible .step-circle {
      outline: 2px solid var(--qwc-primary);
      outline-offset: 3px;
    }

    .step-content {
      padding: 4px 0 0;
      animation: step-fade 0.25s ease;
      overflow-x: clip;
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

    @media (max-width: 768px) {
      .stepper-header {
        justify-content: flex-start;
        padding-left: 12px;
        padding-right: 12px;
      }

      .step-item {
        flex: 0 0 96px;
        min-width: 96px;
      }

      .step-label {
        max-width: 80px;
      }
    }

    @media (max-width: 560px) {
      .fields-grid {
        gap: 12px;
      }

      .step-nav {
        gap: 10px;
        flex-wrap: wrap;
      }

      .step-progress-text {
        width: 100%;
        text-align: center;
        order: 3;
      }

      .step-btn {
        flex: 1 1 0;
        justify-content: center;
      }
    }

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
    this.emitStepperState();
    this.scheduleCenterActiveStep('auto');
    this.schedulePreventMobileAutoFocus();
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has('currentStep') || changedProperties.has('metadata')) {
      this.emitStepperState();
    }

    if (this.cfg?.layout !== 'stepper') return;

    if (changedProperties.has('currentStep') || changedProperties.has('metadata')) {
      this.scheduleCenterActiveStep(changedProperties.has('currentStep') ? 'smooth' : 'auto');
    }

    if (changedProperties.has('currentStep')) {
      this.scheduleScrollToStepTop();
      this.schedulePreventMobileAutoFocus();
    }
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.handleViewportChange);
    window.addEventListener('orientationchange', this.handleViewportChange);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.handleViewportChange);
    window.removeEventListener('orientationchange', this.handleViewportChange);
    if (this.centerStepRaf !== null) {
      cancelAnimationFrame(this.centerStepRaf);
      this.centerStepRaf = null;
    }
    if (this.stepperScrollTimeout !== null) {
      window.clearTimeout(this.stepperScrollTimeout);
      this.stepperScrollTimeout = null;
    }
    if (this.stepTopRaf !== null) {
      cancelAnimationFrame(this.stepTopRaf);
      this.stepTopRaf = null;
    }
    if (this.mobileFocusRaf !== null) {
      cancelAnimationFrame(this.mobileFocusRaf);
      this.mobileFocusRaf = null;
    }
  }

  private handleViewportChange = () => {
    if (this.cfg?.layout !== 'stepper') return;
    this.scheduleCenterActiveStep('auto');
  };

  private scheduleCenterActiveStep(behavior: ScrollBehavior = 'smooth') {
    if (this.centerStepRaf !== null) {
      cancelAnimationFrame(this.centerStepRaf);
    }
    this.centerStepRaf = requestAnimationFrame(() => {
      this.centerStepRaf = null;
      this.centerActiveStep(behavior);
    });
  }

  private centerActiveStep(behavior: ScrollBehavior = 'smooth') {
    const header = this.stepperHeaderEl;
    if (!header) return;

    if (this.currentStep === 0) {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      header.scrollTo({ left: 0, behavior: reduceMotion ? 'auto' : behavior });
      return;
    }

    const activeStep = header.querySelector('.step-item.active') as HTMLElement | null;
    if (!activeStep) return;

    const headerRect = header.getBoundingClientRect();
    const activeRect = activeStep.getBoundingClientRect();

    const targetLeft =
      header.scrollLeft +
      (activeRect.left - headerRect.left) -
      (headerRect.width / 2 - activeRect.width / 2);

    const maxScrollLeft = Math.max(0, header.scrollWidth - header.clientWidth);
    const boundedLeft = Math.min(Math.max(targetLeft, 0), maxScrollLeft);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    header.scrollTo({ left: boundedLeft, behavior: reduceMotion ? 'auto' : behavior });
  }

  private scheduleScrollToStepTop() {
    if (this.stepTopRaf !== null) {
      cancelAnimationFrame(this.stepTopRaf);
    }
    this.stepTopRaf = requestAnimationFrame(() => {
      this.stepTopRaf = null;
      this.scrollToStepTop();
    });
  }

  private scrollToStepTop() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior: ScrollBehavior = reduceMotion ? 'auto' : 'smooth';
    const anchor = this.shadowRoot?.querySelector('.step-content') as HTMLElement | null;
    const target = anchor ?? this;
    const scrollParent = this.findScrollableParent();

    if (scrollParent) {
      const parentRect = scrollParent.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const nextTop = scrollParent.scrollTop + (targetRect.top - parentRect.top) - 8;
      scrollParent.scrollTo({ top: Math.max(0, nextTop), behavior });
      return;
    }

    const hostRect = target.getBoundingClientRect();
    const pageTop = window.scrollY + hostRect.top - 8;
    window.scrollTo({ top: Math.max(0, pageTop), behavior });
  }

  private findScrollableParent(): HTMLElement | null {
    let node: Node | null = this;

    while (node) {
      if (node instanceof HTMLElement && node !== this) {
        const style = window.getComputedStyle(node);
        const canScrollY = /(auto|scroll|overlay)/.test(style.overflowY);
        if (canScrollY && node.scrollHeight > node.clientHeight + 1) {
          return node;
        }
      }

      if (node.parentNode) {
        node = node.parentNode;
        continue;
      }

      if (node instanceof ShadowRoot) {
        node = node.host;
        continue;
      }

      node = null;
    }

    return null;
  }

  private schedulePreventMobileAutoFocus() {
    if (!this.shouldPreventMobileAutoFocus()) return;
    if (this.mobileFocusRaf !== null) {
      cancelAnimationFrame(this.mobileFocusRaf);
    }
    this.mobileFocusRaf = requestAnimationFrame(() => {
      this.mobileFocusRaf = null;
      this.preventMobileAutoFocus();
    });
  }

  private shouldPreventMobileAutoFocus() {
    return window.matchMedia('(max-width: 768px), (pointer: coarse)').matches;
  }

  private preventMobileAutoFocus() {
    if (!this.shouldPreventMobileAutoFocus()) return;
    const active = this.getDeepActiveElement();
    if (!(active instanceof HTMLElement)) return;
    if (!this.isNodeInsideHost(active, this)) return;

    const isTextEntry =
      active instanceof HTMLInputElement ||
      active instanceof HTMLTextAreaElement ||
      active instanceof HTMLSelectElement ||
      active.isContentEditable;

    if (!isTextEntry) return;
    active.blur();
  }

  private getDeepActiveElement(): Element | null {
    let active: Element | null = document.activeElement;
    while (active instanceof HTMLElement && active.shadowRoot?.activeElement) {
      active = active.shadowRoot.activeElement as Element;
    }
    return active;
  }

  private isNodeInsideHost(node: Node, host: HTMLElement): boolean {
    let current: Node | null = node;
    while (current) {
      if (current === host) return true;

      if (current.parentNode) {
        current = current.parentNode;
        continue;
      }

      if (current instanceof ShadowRoot) {
        current = current.host;
        continue;
      }

      current = null;
    }
    return false;
  }

  private setCurrentStep(index: number, forceCenter = false): boolean {
    const total = this.formLayoutUnits.length;
    if (total === 0) return false;
    const clamped = Math.max(0, Math.min(index, total - 1));

    if (clamped > this.currentStep && !this.validateCurrentStep()) {
      if (forceCenter && this.cfg?.layout === 'stepper') {
        this.scheduleCenterActiveStep('smooth');
      }
      return false;
    }

    if (clamped !== this.currentStep) {
      this.currentStep = clamped;
      return true;
    }
    if (forceCenter && this.cfg?.layout === 'stepper') {
      this.scheduleCenterActiveStep('smooth');
    }
    return false;
  }

  public goNextStep(): boolean {
    return this.setCurrentStep(this.currentStep + 1, true);
  }

  public goPreviousStep(): boolean {
    return this.setCurrentStep(this.currentStep - 1, true);
  }

  private validateCurrentStep(): boolean {
    if (this.cfg?.layout !== 'stepper') return this.validateForm();

    const fields = this.shadowRoot?.querySelectorAll('.step-content shipthis-field') || [];
    let isValid = true;

    fields.forEach((field: any) => {
      if (typeof field.validate === 'function' && !field.validate()) {
        isValid = false;
      }
    });

    this.notifyFormChange();
    return isValid;
  }

  private onStepItemKeydown(e: KeyboardEvent, index: number, total: number) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.setCurrentStep(index);
      return;
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      this.setCurrentStep(Math.min(index + 1, total - 1));
      return;
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      this.setCurrentStep(Math.max(index - 1, 0));
      return;
    }
    if (e.key === 'Home') {
      e.preventDefault();
      this.setCurrentStep(0);
      return;
    }
    if (e.key === 'End') {
      e.preventDefault();
      this.setCurrentStep(total - 1);
    }
  }

  private onStepperScroll() {
    if (this.stepperScrollTimeout !== null) {
      window.clearTimeout(this.stepperScrollTimeout);
    }

    this.stepperScrollTimeout = window.setTimeout(() => {
      this.stepperScrollTimeout = null;
      this.settleToNearestStep();
    }, 120);
  }

  private settleToNearestStep() {
    const header = this.stepperHeaderEl;
    if (!header) return;

    const steps = Array.from(header.querySelectorAll('.step-item')) as HTMLElement[];
    if (steps.length === 0) return;

    const headerCenter = header.scrollLeft + header.clientWidth / 2;
    let nearestIdx = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    steps.forEach((step, idx) => {
      const stepCenter = step.offsetLeft + step.offsetWidth / 2;
      const distance = Math.abs(stepCenter - headerCenter);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIdx = idx;
      }
    });

    this.setCurrentStep(nearestIdx, true);
  }

  private emitStepperState() {
    const total = this.formLayoutUnits.length;
    const current = total > 0 ? Math.min(this.currentStep, total - 1) : 0;
    const isLast = total > 0 ? current >= total - 1 : true;

    this.dispatchEvent(new CustomEvent('stepper-state-change', {
      detail: { currentStep: current, totalSteps: total, isLastStep: isLast },
      bubbles: true,
      composed: true
    }));
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
    if (total === 0) {
      return html`<div class="stepper-container"></div>`;
    }
    const useFooterStepperNavigation = this.cfg?.stepperSubmitLastOnly === true;
    const current = Math.min(this.currentStep, total - 1);
    const activeUnit = units[current];

    return html`
      <div class="stepper-container">
        <div class="stepper-header" @scroll=${this.onStepperScroll}>
          ${units.map((unit, i) => html`
            <button
              type="button"
              class="step-item ${i === current ? 'active' : ''} ${i < current ? 'completed' : ''}"
              @click=${() => this.setCurrentStep(i)}
              @keydown=${(e: KeyboardEvent) => this.onStepItemKeydown(e, i, total)}
              aria-current=${i === current ? 'step' : 'false'}
              aria-label=${`Step ${i + 1}: ${unit.name}`}
            >
              <div class="step-circle">
                ${i < current ? html`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>` : i + 1}
              </div>
              <span class="step-label">${unit.name}</span>
            </button>
          `)}
        </div>

        <div class="step-content" .key=${current}>
          ${this.renderCard(activeUnit.data)}
        </div>

        ${!useFooterStepperNavigation ? html`
          <div class="step-nav">
            ${current > 0 ? html`
              <button class="step-btn step-btn-back" @click=${() => this.setCurrentStep(current - 1)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                Back
              </button>
            ` : html`<div></div>`}
            <span class="step-progress-text">${current + 1} / ${total}</span>
            ${current < total - 1 ? html`
              <button class="step-btn step-btn-next" @click=${() => this.setCurrentStep(current + 1)}>
                Next
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            ` : html`<div></div>`}
          </div>
        ` : null}
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

  private normalizeFieldText(value: unknown): string {
    return String(value ?? '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  private compactFieldText(value: unknown): string {
    return this.normalizeFieldText(value).replace(/\s+/g, '');
  }

  private isMandatoryContactField(field: any): boolean {
    const type = this.normalizeFieldText(field?.field_type || field?.type);
    const labelCompact = this.compactFieldText(field?.label);
    const idCompact = this.compactFieldText(field?.field_id);
    const combined = `${labelCompact} ${idCompact}`;

    const isEmail = type === 'email' || combined.includes('email');
    const isCompany = combined.includes('company');
    const isPhone = type === 'phone' || /(phone|mobile|telephone|contactnumber|tel)/.test(combined);
    const isCountryCode = /(countrycode|dialcode|isdcode|countryprefix|dialprefix)/.test(combined);
    const isClientName =
      /^(name|fullname|clientname|contactname|customername)$/.test(labelCompact) ||
      /^(name|fullname|clientname|contactname|customername)$/.test(idCompact);

    return isClientName || isEmail || isCompany || isPhone || isCountryCode;
  }

  private isFieldRequired(field: any): boolean {
    return !!(field?.required || field?.attributes?.required || this.isMandatoryContactField(field));
  }

  private isFieldRequiredForValidation(field: any): boolean {
    let required = this.isFieldRequired(field);
    const adv = field?.advanced_attributes;

    if (!required && adv?.enable_conditions && adv?.enable_direct_required_condition && adv?.direct_required_condition_name) {
      required = conditionService.evaluateCondition(
        adv.direct_required_condition_name,
        adv.direct_required_condition_value,
        this.formData
      );
    }

    return !!required;
  }

  private getRenderableFields(): any[] {
    const fields: any[] = [];

    this.metadata?.meta?.sections?.forEach((section: any) => {
      if (section?.name === 'Hidden') return;
      section?.cards?.forEach((card: any) => {
        if (card?.hidden) return;
        card?.fields?.forEach((field: any) => fields.push(field));
      });
    });

    return fields;
  }

  private hasFieldValue(value: any): boolean {
    if (value === undefined || value === null) return false;
    if (typeof value === 'string') return value.trim().length > 0;
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === 'object') return Object.keys(value).length > 0;
    return true;
  }

  private renderField(field: any) {
    const fieldWidth = field.field_meta?.field_width?.width || 100;
    const style = `width: calc(${fieldWidth}% - 16px); min-width: min(250px, 100%); max-width: 100%; flex-grow: 1;`;
    if (field.attributes?.hidden) return html``;

    return html`
      <shipthis-field
        style=${style} .field=${field} .label=${field.label} .type=${field.field_type || field.type}
        .required=${this.isFieldRequired(field)} .placeholder=${field.placeholder || ''} .hint_message=${field.hint_message || ''}
        .hide_label=${field.attributes?.hide_label || false} .read_only=${field.attributes?.read_only || false}
        .disabled=${field.attributes?.disabled || false} .max_value=${field.attributes?.max_value}
        .min_value=${field.attributes?.min_value} .lines=${field.attributes?.lines || 2}
        .value=${this.formData[field.field_id] || ''} .fieldId=${field.field_id}
        .default_country=${this.cfg?.phoneDefaultCountry || ''}
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
    const fields = this.getRenderableFields();
    if (fields.length === 0) return false;

    const hasVisibleInvalidField = fields.some((field: any) => {
      if (!field?.field_id) return false;
      if (this.isFieldHidden(field)) return false;
      return this.fieldValidation[field.field_id] === true;
    });
    if (hasVisibleInvalidField) return false;

    return fields.every((field: any) => {
      if (!field?.field_id) return true;
      if (this.isFieldHidden(field)) return true;
      if (!this.isFieldRequiredForValidation(field)) return true;
      return this.hasFieldValue(this.formData[field.field_id]);
    });
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
