import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';

import './layout/card';
import './layout/header';
import './layout/footer';
import './layout/form';

import { ConfigService } from '../service/config.service';
import { shipthisApi } from '../service/shipthis.service';

type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

@customElement('shipthis-quotation')
export class ShipthisQuotation extends LitElement {

  /* -----------------------------------------------------
   * STYLES
   * --------------------------------------------------- */

  static styles = css`
    :host {
      display: block;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      color: var(--qwc-text, #1e293b);
      max-width: 100%;
      overflow-x: clip;
    }

    shipthis-quote-card {
      position: relative;
    }

    .form-footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 12px;
      padding: 20px 32px 28px;
      border-top: 1px solid var(--qwc-border);
    }

    .btn-clear {
      background: var(--qwc-btn-clear-bg);
      border: 1.5px solid var(--qwc-btn-clear-border);
      color: var(--qwc-btn-clear-text);
      padding: 10px 24px;
      border-radius: var(--qwc-radius);
      font-size: 14px;
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .btn-clear:hover {
      background: var(--qwc-surface);
      border-color: var(--qwc-primary);
      filter: brightness(0.95);
    }

    .btn-submit {
      background: var(--qwc-btn-submit-bg);
      color: var(--qwc-btn-submit-text);
      border: none;
      padding: 10px 28px;
      border-radius: var(--qwc-radius);
      font-size: 14px;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.15s ease;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 2px 8px color-mix(in srgb, var(--qwc-btn-submit-bg) 40%, transparent);
    }

    .btn-submit:hover:not(:disabled) {
      filter: brightness(1.1);
      box-shadow: 0 4px 14px color-mix(in srgb, var(--qwc-btn-submit-bg) 50%, transparent);
      transform: translateY(-1px);
    }

    .btn-submit:disabled {
      opacity: 0.55;
      cursor: not-allowed;
      box-shadow: none;
      transform: none;
      filter: none;
    }

    /* Toast */
    .toast-container {
      position: fixed;
      z-index: var(--qwc-toast-z-index, 2147483000);
      display: flex;
      flex-direction: column;
      gap: 10px;
      pointer-events: none;
      width: fit-content;
      max-width: min(var(--qwc-toast-max-width, 360px), calc(100% - 24px));
    }

    .toast-container.toast-top-right {
      top: calc(env(safe-area-inset-top, 0px) + var(--qwc-toast-offset-y, 16px));
      right: var(--qwc-toast-offset-x, 16px);
      align-items: flex-end;
    }

    .toast-container.toast-top-left {
      top: calc(env(safe-area-inset-top, 0px) + var(--qwc-toast-offset-y, 16px));
      left: var(--qwc-toast-offset-x, 16px);
      align-items: flex-start;
    }

    .toast-container.toast-bottom-right {
      bottom: calc(env(safe-area-inset-bottom, 0px) + var(--qwc-toast-offset-y, 16px));
      right: var(--qwc-toast-offset-x, 16px);
      align-items: flex-end;
    }

    .toast-container.toast-bottom-left {
      bottom: calc(env(safe-area-inset-bottom, 0px) + var(--qwc-toast-offset-y, 16px));
      left: var(--qwc-toast-offset-x, 16px);
      align-items: flex-start;
    }

    .toast-container.toast-top-center {
      top: calc(env(safe-area-inset-top, 0px) + var(--qwc-toast-offset-y, 16px));
      left: 50%;
      transform: translateX(-50%);
      align-items: center;
      width: min(var(--qwc-toast-max-width, 360px), calc(100% - 24px));
    }

    .toast-container.toast-bottom-center {
      bottom: calc(env(safe-area-inset-bottom, 0px) + var(--qwc-toast-offset-y, 16px));
      left: 50%;
      transform: translateX(-50%);
      align-items: center;
      width: min(var(--qwc-toast-max-width, 360px), calc(100% - 24px));
    }

    .toast {
      background: var(--qwc-text);
      color: var(--qwc-bg);
      padding: 14px 20px;
      border-radius: min(10px, var(--qwc-radius));
      font-size: 14px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 12px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.18);
      pointer-events: all;
      animation: toast-in 0.25s ease;
      max-width: min(var(--qwc-toast-max-width, 360px), calc(100% - 4px));
      width: fit-content;
    }

    .toast.toast-error {
      border-left: 4px solid var(--qwc-error);
    }

    .toast.toast-success {
      border-left: 4px solid var(--qwc-success);
    }

    .toast-icon {
      font-size: 18px;
      flex-shrink: 0;
    }

    @keyframes toast-in {
      from { opacity: 0; transform: translateX(40px); }
      to   { opacity: 1; transform: translateX(0); }
    }

    .powered-by {
      text-align: center;
      font-size: 12px;
      color: var(--qwc-text-muted);
      padding: 12px 0 4px;
    }

    .powered-by a {
      color: var(--qwc-primary);
      text-decoration: none;
      font-weight: 500;
    }

    .powered-by a:hover {
      text-decoration: underline;
    }

    .loader-container {
      display: flex;
      flex-direction: column;
      background: var(--qwc-bg);
      border-radius: var(--qwc-radius);
      position: relative;
      overflow: hidden;
      min-height: 480px;
      border: 1px solid var(--qwc-border);
    }

    .mesh-background {
      position: absolute;
      inset: 0;
      opacity: 0.15;
      background: 
        radial-gradient(circle at 0% 0%, color-mix(in srgb, var(--qwc-primary) 5%, transparent) 0%, transparent 50%),
        radial-gradient(circle at 100% 100%, color-mix(in srgb, var(--qwc-accent) 5%, transparent) 0%, transparent 50%);
    }

    .skeleton-header { padding: 48px 32px 32px; z-index: 1; }
    .skeleton-title { width: 180px; height: 28px; background: var(--qwc-surface); border-radius: 4px; margin-bottom: 12px; }
    .skeleton-text { width: 280px; height: 14px; background: var(--qwc-surface); border-radius: 4px; }
    
    .skeleton-body { padding: 0 32px 40px; display: flex; flex-direction: column; gap: 24px; z-index: 1; }
    .skeleton-input { height: 52px; background: var(--qwc-surface); border-radius: 8px; width: 100%; border: 1px solid var(--qwc-border); }
    .skeleton-button { width: 160px; height: 44px; background: var(--qwc-surface); border-radius: var(--qwc-radius); }

    .loader-footer {
      padding: 24px 32px;
      border-top: 1px solid var(--qwc-border);
      display: flex;
      justify-content: flex-end;
      background: color-mix(in srgb, var(--qwc-surface) 30%, transparent);
      z-index: 1;
    }

    .shimmer {
      position: relative;
      overflow: hidden;
    }

    .shimmer::after {
      content: "";
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);
      animation: shimmer-load 2s infinite linear;
    }
    
    @keyframes shimmer-load {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    @media (max-width: 640px) {
      .form-footer {
        padding: 14px 14px 18px;
        flex-wrap: wrap;
        gap: 10px;
      }

      .btn-clear,
      .btn-submit {
        width: 100%;
        justify-content: center;
      }
    }
  `;

  /* -----------------------------------------------------
   * CONFIG INPUTS (HTML ATTRIBUTES)
   * --------------------------------------------------- */

  @property({ attribute: 'organisation-id' }) organisationId = '';
  @property({ attribute: 'api-key' }) apiKey = '';
  @property({ attribute: 'captcha-key' }) captchaKey = '';
  @property() collection = 'third_party_quotation';

  @property() title = 'Get a Quote';
  @property() description = '';

  @property({ attribute: 'redirect-url' }) redirectUrl = '';
  @property() locale = 'en';
  @property() layout: 'fullform' | 'stepper' | 'accordion' | 'tabs' = 'fullform';

  @property({ attribute: 'show-header', converter: (v: string | null) => v !== 'false' && v !== null }) showHeader = true;
  @property({ attribute: 'show-footer', converter: (v: string | null) => v !== 'false' && v !== null }) showFooter = true;

  @property({ attribute: 'submit-button-text' }) submitButtonText: string | null = null;
  @property({ attribute: 'clear-button-text' }) clearButtonText: string | null = null;
  @property({ attribute: 'show-clear-button', converter: (v: string | null) => v !== 'false' && v !== null }) showClearButton = true;
  @property({ attribute: 'stepper-submit-last-only', converter: (v: string | null) => v !== 'false' && v !== null }) stepperSubmitLastOnly = false;
  @property({ attribute: 'next-button-text' }) nextButtonText: string | null = null;
  @property({ attribute: 'phone-default-country' }) phoneDefaultCountry: string | null = null;
  @property({ attribute: 'field-label-color' }) fieldLabelColor: string | null = null;
  @property({ attribute: 'step-label-color' }) stepLabelColor: string | null = null;
  @property({ attribute: 'step-label-active-color' }) stepLabelActiveColor: string | null = null;
  @property({ attribute: 'card-title-color' }) cardTitleColor: string | null = null;

  @property({ type: Boolean }) debug = false;
  @property({ attribute: 'track-events', type: Boolean }) trackEvents = true;
  @property({ attribute: 'success-message' }) successMessage: string | null = null;
  @property({ attribute: 'toast-position' }) toastPosition: ToastPosition = 'top-right';
  @property({ attribute: 'toast-offset-x' }) toastOffsetX = '16px';
  @property({ attribute: 'toast-offset-y' }) toastOffsetY = '16px';
  @property({ attribute: 'toast-z-index' }) toastZIndex = '2147483000';
  @property({ attribute: 'toast-max-width' }) toastMaxWidth = '360px';

  @property({
    converter: (v: string | null) => {
      if (!v) return {};
      try { return JSON.parse(v); }
      catch { return {}; }
    }
  })
  theme: any = {};

  /* -----------------------------------------------------
   * INTERNAL STATE
   * --------------------------------------------------- */

  @state()
  private isLoading = true;

  @state()
  private isFormValid = false;

  @state()
  private toasts: Array<{ id: number; message: string; type: 'error' | 'success' }> = [];

  private toastCounter = 0;

  @query('shipthis-quote-form')
  private _formEl: any;

  @state()
  private isSubmitting = false;

  @state()
  private isConfigValid = true;

  @state()
  private initError: string | null = null;

  @state()
  private stepperState = {
    currentStep: 0,
    totalSteps: 0,
    isLastStep: false
  };

  /* -----------------------------------------------------
   * CONFIG ACCESSOR (SINGLE SOURCE)
   * --------------------------------------------------- */

  private get cfg() {
    return ConfigService.get();
  }

  /* -----------------------------------------------------
   * LIFECYCLE
   * --------------------------------------------------- */

  connectedCallback() {
    super.connectedCallback();
    this.syncConfig();
    this.updateThemeVariables(); // Initial sync for error card if needed
  }

  willUpdate(changedProperties: PropertyValues) {
    super.willUpdate?.(changedProperties);
    this.syncConfig();
    
    // Update CSS variables when visual config changes dynamically
    if (
      changedProperties.has('theme') ||
      changedProperties.has('toastOffsetX') ||
      changedProperties.has('toastOffsetY') ||
      changedProperties.has('toastZIndex') ||
      changedProperties.has('toastMaxWidth') ||
      changedProperties.has('fieldLabelColor') ||
      changedProperties.has('stepLabelColor') ||
      changedProperties.has('stepLabelActiveColor') ||
      changedProperties.has('cardTitleColor')
    ) {
      this.updateThemeVariables();
    }
  }

  private syncConfig() {
    ConfigService.init({
      organisationId: this.organisationId,
      apiKey: this.apiKey,
      captchaKey: this.captchaKey,
      collection: this.collection,
      theme: this.theme,
      layout: this.layout,
      showHeader: this.showHeader,
      showFooter: this.showFooter,
      redirectUrl: this.redirectUrl,
      locale: this.locale,
      description: this.description,
      title: this.title,
      debug: this.debug,
      trackEvents: this.trackEvents,
      submitButtonText: this.submitButtonText,
      clearButtonText: this.clearButtonText,
      showClearButton: this.showClearButton,
      stepperSubmitLastOnly: this.stepperSubmitLastOnly,
      nextButtonText: this.nextButtonText,
      phoneDefaultCountry: this.phoneDefaultCountry,
      fieldLabelColor: this.fieldLabelColor,
      stepLabelColor: this.stepLabelColor,
      stepLabelActiveColor: this.stepLabelActiveColor,
      cardTitleColor: this.cardTitleColor,
      successMessage: this.successMessage,
      toastPosition: this.toastPosition,
      toastOffsetX: this.toastOffsetX,
      toastOffsetY: this.toastOffsetY,
      toastZIndex: this.toastZIndex,
      toastMaxWidth: this.toastMaxWidth
    });
  }

  async firstUpdated() {
      this.initialize(); 
  }

  private async initialize() { 
    const cfg = this.cfg; 
    if (!cfg?.apiKey || !cfg?.organisationId) {
      this.isConfigValid = false;
      this.isLoading = false;
      return;
    }  
    
    try {
      const resp: any = await shipthisApi.init({
        apiKey: cfg.apiKey,
        organisationId: cfg.organisationId,
        collection: cfg.collection,
        userType: 'employee'
      });
  

      if (resp && resp.success === false) {
        throw new Error(resp.errors?.[0]?.message || 'Initialization failed');
      }

      this.isConfigValid = true;
      this.initError = null;
    } catch (err: any) {
      console.error('ShipthisQuoteForm: Initialization failed', err);
      this.isConfigValid = false;
      this.initError = err?.message || 'Failed to connect to Shipthis API';
    } finally {
      this.isLoading = false;
      this.updateThemeVariables();
    }
  }

  private updateThemeVariables() {
    const theme = this.cfg?.theme ?? {};
    const mode = theme.mode ?? 'light';
    const active = theme[mode] ?? {};

    // Helper to get nested or flat color
    const getColor = (path: string, fallback: string) => {
      const parts = path.split('.');
      let current = active;
      for (const part of parts) {
        if (current[part] === undefined) return fallback;
        current = current[part];
      }
      return current as string;
    };

    const vars: Record<string, string> = {
      '--qwc-primary': active.primary ?? '#0661FC',
      '--qwc-secondary': active.secondary ?? (active.primary ?? '#094fb5'),
      '--qwc-accent': active.accent ?? '#FFB200',
      '--qwc-bg': active.background ?? (mode === 'light' ? '#ffffff' : '#0f172a'),
      '--qwc-surface': active.surface ?? (mode === 'light' ? '#f8fafc' : '#1e293b'),
      '--qwc-text': active.text ?? (mode === 'light' ? '#1e293b' : '#f8fafc'),
      '--qwc-text-muted': active.textMuted ?? (mode === 'light' ? '#64748b' : '#94a3b8'),
      '--qwc-border': active.border ?? (mode === 'light' ? '#e2e8f0' : '#334155'),
      '--qwc-radius': theme.radius ?? '12px',
      '--qwc-error': active.error ?? '#ef4444',
      '--qwc-success': active.success ?? '#22c55e',
      
      // Button Overrides
      '--qwc-btn-submit-bg': getColor('submitButton.background', active.primary ?? '#0661FC'),
      '--qwc-btn-submit-text': getColor('submitButton.text', '#ffffff'),
      '--qwc-btn-clear-bg': getColor('clearButton.background', 'transparent'),
      '--qwc-btn-clear-text': getColor('clearButton.text', (mode === 'light' ? '#64748b' : '#94a3b8')),
      '--qwc-btn-clear-border': getColor('clearButton.border', (mode === 'light' ? '#e2e8f0' : '#334155')),
      '--qwc-field-label': this.cfg?.fieldLabelColor || getColor('labels.field', active.textMuted ?? (mode === 'light' ? '#64748b' : '#94a3b8')),
      '--qwc-step-label': this.cfg?.stepLabelColor || getColor('labels.stepper', active.textMuted ?? (mode === 'light' ? '#64748b' : '#94a3b8')),
      '--qwc-step-label-active': this.cfg?.stepLabelActiveColor || getColor('labels.stepperActive', active.primary ?? '#0661FC'),
      '--qwc-card-title': this.cfg?.cardTitleColor || getColor('labels.card', active.text ?? (mode === 'light' ? '#1e293b' : '#f8fafc')),
      '--qwc-toast-offset-x': this.toCssLength(this.cfg?.toastOffsetX, '16px'),
      '--qwc-toast-offset-y': this.toCssLength(this.cfg?.toastOffsetY, '16px'),
      '--qwc-toast-z-index': this.toCssZIndex(this.cfg?.toastZIndex, '2147483000'),
      '--qwc-toast-max-width': this.toCssLength(this.cfg?.toastMaxWidth, '360px'),
    };

    Object.entries(vars).forEach(([key, value]) => {
      this.style.setProperty(key, value);
    });
  }

  private get toastPositionClass() {
    const allowed: ToastPosition[] = ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'];
    const position = (this.cfg?.toastPosition || 'top-right') as ToastPosition;
    return allowed.includes(position) ? `toast-${position}` : 'toast-top-right';
  }

  private toCssLength(value: string | number | undefined | null, fallback: string): string {
    if (value === undefined || value === null || value === '') return fallback;
    if (typeof value === 'number') return `${value}px`;
    const trimmed = String(value).trim();
    if (!trimmed) return fallback;
    if (/^-?\d+(\.\d+)?$/.test(trimmed)) return `${trimmed}px`;
    return trimmed;
  }

  private toCssZIndex(value: string | number | undefined | null, fallback: string): string {
    if (value === undefined || value === null || value === '') return fallback;
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) return fallback;
    return String(Math.round(parsed));
  }

  private handleFormChange(e: any) {
    this.isFormValid = e.detail.isValid;
  }

  private handleRequestSubmit() {
    this.handleSubmit();
  }

  private handleStepperStateChange(e: CustomEvent<{ currentStep: number; totalSteps: number; isLastStep: boolean }>) {
    this.stepperState = e.detail || { currentStep: 0, totalSteps: 0, isLastStep: true };
  }

  private handleFooterPrimaryAction() {
    const useStepperLastSubmit = this.cfg?.layout === 'stepper' && this.cfg?.stepperSubmitLastOnly == true;
    if (useStepperLastSubmit && !this.stepperState.isLastStep) {
      this._formEl?.goNextStep?.();
      return;
    }
    this.handleSubmit();
  }

  /* -----------------------------------------------------
   * TOAST SYSTEM
   * --------------------------------------------------- */

  private showToast(message: string, type: 'error' | 'success' = 'error') {
    const id = ++this.toastCounter;
    this.toasts = [...this.toasts, { id, message, type }];
    setTimeout(() => {
      this.toasts = this.toasts.filter(t => t.id !== id);
    }, 4000);
  }

  /* -----------------------------------------------------
   * EVENTS
   * --------------------------------------------------- */

  private async handleSubmit() { 
    if (!this.isFormValid) {
      this.showToast('Please fill in all required fields before submitting.', 'error');
      return;
    }

    // Get form data from the child form component
    const formData = this._formEl?.formData ?? {};
    const collection = this.cfg?.collection || 'third_party_quotation';

    this.isSubmitting = true;
    try {
      await shipthisApi.createCollectionItem(collection, formData);
      const successMsg = this.cfg?.successMessage || 'Your request has been submitted successfully! We will get back to you shortly.';
      this.showToast(successMsg, 'success');
      
      this.dispatchEvent(new CustomEvent('quote-submit', {
        detail: { formData },
        bubbles: true,
        composed: true
      }));

      // Redirect or Refresh after delay
      setTimeout(() => {
        if (this.cfg?.redirectUrl) {
          window.location.href = this.cfg.redirectUrl;
        } else {
          window.location.reload();
        }
      }, 2000);

      // Optionally clear form after success
      this.handleClear();
    } catch (err: any) {
      const msg = err?.message || 'Something went wrong. Please try again.';
      this.showToast(`Submission failed: ${msg}`, 'error');
    } finally {
      this.isSubmitting = false;
    }
  }

  private handleClear() {
    if (this._formEl && typeof this._formEl.resetForm === 'function') {
      this._formEl.resetForm();
    }
    this.isFormValid = false;
    this.dispatchEvent(new CustomEvent('quote-clear', { bubbles: true, composed: true }));
  }

  /* -----------------------------------------------------
   * LOADER (THEME DRIVEN)
   * --------------------------------------------------- */

  private renderLoader() {
    return html`
      <slot name="loader">
        <div class="loader-container">
          <div class="mesh-background"></div>
          <div style="position: relative; z-index: 1;">
            <div class="skeleton-header">
              <div class="skeleton-title shimmer"></div>
              <div class="skeleton-text shimmer"></div>
            </div>
            <div class="skeleton-body">
              <div class="skeleton-input shimmer"></div>
              <div class="skeleton-input shimmer"></div>
              <div class="skeleton-input shimmer"></div>
              <div class="skeleton-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                <div class="skeleton-input shimmer"></div>
                <div class="skeleton-input shimmer"></div>
              </div>
            </div>
            <div class="loader-footer">
              <div class="skeleton-button shimmer"></div>
            </div>
          </div>
        </div>
      </slot>
    `;
  }

  /* -----------------------------------------------------
   * RENDER
   * --------------------------------------------------- */

  render() {
    if (this.isLoading) {
      return this.renderLoader();
    }

    const useStepperLastSubmit = this.cfg?.layout === 'stepper' && this.cfg?.stepperSubmitLastOnly === true;
    const showNextOnly = useStepperLastSubmit && (this.stepperState.totalSteps === 0 || !this.stepperState.isLastStep);
    const primaryButtonText = showNextOnly
      ? (this.cfg?.nextButtonText || 'Next')
      : (useStepperLastSubmit
        ? (this.cfg?.submitButtonText || (this.isSubmitting ? 'Submitting...' : 'Get My Quote'))
        : (this.cfg?.submitButtonText || (this.isSubmitting ? 'Submitting...' : 'Submit Request')));

    return html`
      <shipthis-quote-card>
        ${!this.isConfigValid ? this.renderConfigError() : html`
          ${this.cfg.showHeader ? html`
            <shipthis-quote-header>
              <slot name="header">
                <h3>${this.cfg.title}</h3>
                <p>${this.cfg.description}</p>
              </slot>
            </shipthis-quote-header>
          ` : null}

          <div>
           <shipthis-quote-form
             .cfg=${this.cfg}
             @form-change=${this.handleFormChange}
             @request-submit=${this.handleRequestSubmit}
             @stepper-state-change=${this.handleStepperStateChange}
           ></shipthis-quote-form>
          </div>

          <div class="form-footer">
            ${this.cfg.showClearButton !== false && !useStepperLastSubmit ? html`
              <button class="btn-clear" @click=${this.handleClear}>
                ${this.cfg.clearButtonText || 'Clear'}
              </button>
            ` : null}
            <button class="btn-submit" @click=${this.handleFooterPrimaryAction} ?disabled=${showNextOnly ? false : this.isSubmitting}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              ${primaryButtonText}
            </button>
          </div>

          ${this.cfg.showFooter ? html`
            <shipthis-quote-footer>
              <slot name="footer">
                <div class="powered-by">
                  Powered by <a href="https://shipthis.co" target="_blank">Shipthis</a>
                </div>
              </slot>
            </shipthis-quote-footer>
          ` : null}
        `}

        <div class="toast-container ${this.toastPositionClass}">
          ${this.toasts.map(t => html`
            <div class="toast toast-${t.type}">
              <span class="toast-icon">${t.type === 'success' ? '✅' : '⚠️'}</span>
              <span>${t.message}</span>
            </div>
          `)}
        </div>
      </shipthis-quote-card>
    `;
  }

  private renderConfigError() {
    return html`
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 80px 40px;
        text-align: center;
        background: var(--qwc-bg);
        border-radius: var(--qwc-radius);
      ">
        <h2 style="
          font-size: 20px;
          font-weight: 600;
          color: var(--qwc-primary);
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        ">
          System Notice
        </h2>
        
        <p style="
          color: var(--qwc-text);
          line-height: 1.6;
          font-size: 16px;
          max-width: 480px;
          margin: 0 auto 40px;
          font-weight: 400;
        ">
          ${this.initError 
            ? html`The quotation module encountered a connection error. Please verify your network and credentials.`
            : html`The quotation module requires valid configuration parameters to initialize. Please ensure all required identity attributes are provided.`}
        </p>

        <div style="
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          width: 100%;
          max-width: 400px;
          background: var(--qwc-border);
          border: 1px solid var(--qwc-border);
          border-radius: 4px;
          overflow: hidden;
        ">
          <div style="display: flex; justify-content: space-between; padding: 12px 16px; background: var(--qwc-surface);">
            <span style="font-size: 12px; font-weight: 500; color: var(--qwc-text-muted);">PARAMETER</span>
            <span style="font-size: 12px; font-weight: 500; color: var(--qwc-text-muted);">STATUS</span>
          </div>
          
          <div style="display: flex; justify-content: space-between; padding: 14px 16px; background: var(--qwc-bg);">
            <span style="font-size: 13px; font-family: monospace; color: var(--qwc-text);">organisation-id</span>
            <span style="font-size: 11px; font-weight: 600; color: ${!this.organisationId ? 'var(--qwc-error)' : 'var(--qwc-success)'};">
              ${!this.organisationId ? 'REQUIRED' : 'CONFIGURED'}
            </span>
          </div>

          <div style="display: flex; justify-content: space-between; padding: 14px 16px; background: var(--qwc-bg);">
            <span style="font-size: 13px; font-family: monospace; color: var(--qwc-text);">api-key</span>
            <span style="font-size: 11px; font-weight: 600; color: ${!this.apiKey ? 'var(--qwc-error)' : 'var(--qwc-success)'};">
              ${!this.apiKey ? 'REQUIRED' : 'CONFIGURED'}
            </span>
          </div>

          <div style="display: flex; justify-content: space-between; padding: 14px 16px; background: var(--qwc-bg);">
            <span style="font-size: 13px; font-family: monospace; color: var(--qwc-text);">api-connection</span>
            <span style="font-size: 11px; font-weight: 600; color: ${this.initError ? 'var(--qwc-error)' : (this.isConfigValid ? 'var(--qwc-success)' : 'var(--qwc-text-muted)')};">
               ${this.initError ? 'FAILED' : (this.isConfigValid ? 'CONNECTED' : 'WAITING')}
            </span>
          </div>
        </div>

        ${this.initError ? html`
          <div style="margin-top: 16px; font-size: 12px; color: var(--qwc-error); font-family: monospace;">
             Error: ${this.initError}
          </div>
        ` : null}

        <div style="margin-top: 48px; font-size: 13px; color: var(--qwc-text-muted);">
          For technical assistance, please refer to the integration documentation.
        </div>
      </div>
    `;
  }
}
