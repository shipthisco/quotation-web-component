import { LitElement, html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';

import './layout/card';
import './layout/header';
import './layout/footer';
import './layout/form';

import { ConfigService } from '../service/config.service';
import { shipthisApi } from '../service/shipthis.service';

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
      top: 24px;
      right: 24px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
      pointer-events: none;
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
      max-width: 360px;
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

  @property({ attribute: 'show-header', type: Boolean }) showHeader = true;
  @property({ attribute: 'show-footer', type: Boolean }) showFooter = true;

  @property({ attribute: 'submit-button-text' }) submitButtonText: string | null = null;
  @property({ attribute: 'clear-button-text' }) clearButtonText: string | null = null;
  @property({ attribute: 'show-clear-button', type: Boolean }) showClearButton = true;

  @property({ type: Boolean }) debug = false;
  @property({ attribute: 'track-events', type: Boolean }) trackEvents = true;
  @property({ attribute: 'success-message' }) successMessage: string | null = null;

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
    this.updateThemeVariables(); // Initial sync for error card if needed

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
      successMessage: this.successMessage
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
      
      console.log("ShipthisQuoteForm: Initialization success", resp);

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
    };

    Object.entries(vars).forEach(([key, value]) => {
      this.style.setProperty(key, value);
    });
  }

  private handleFormChange(e: any) {
    this.isFormValid = e.detail.isValid;
  }

  private handleRequestSubmit() {
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
           <shipthis-quote-form .cfg=${this.cfg} @form-change=${this.handleFormChange} @request-submit=${this.handleRequestSubmit}></shipthis-quote-form>
          </div>

          <div class="form-footer">
            ${this.cfg.showClearButton !== false ? html`
              <button class="btn-clear" @click=${this.handleClear}>
                ${this.cfg.clearButtonText || 'Clear'}
              </button>
            ` : null}
            <button class="btn-submit" @click=${this.handleSubmit} ?disabled=${this.isSubmitting}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              ${this.cfg.submitButtonText || (this.isSubmitting ? 'Submitting...' : 'Submit Request')}
            </button>
          </div>

          ${this.cfg.showFooter ? html`
            <shipthis-quote-footer>
              <slot name="footer">
                <div class="powered-by">
                  Powered by <a href="https://shipthis.com" target="_blank">Shipthis</a>
                </div>
              </slot>
            </shipthis-quote-footer>
          ` : null}
        `}

        <div class="toast-container">
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