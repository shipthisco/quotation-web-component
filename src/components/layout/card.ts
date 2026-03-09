import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ConfigService } from '../../service/config.service';

@customElement('shipthis-quote-card')
export class ShipthisQuoteCard extends LitElement {

  /* --------------------------------------------
   * STYLES
   * ------------------------------------------ */

  static styles = css`
    :host {
      display: block;
      border-radius: var(--qwc-radius);
      padding: 20px;
      border: 1px solid var(--qwc-border);
      box-shadow: 0 4px 14px rgba(0,0,0,0.05);
      background: var(--qwc-bg);
      color: var(--qwc-text);
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}