import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('shipthis-quote-header')
export class ShipthisQuoteHeader extends LitElement {

  static styles = css`
    :host {
      display:block;
      margin-bottom:16px;
    }
  `;

  render() {
    return html`
      <slot>
        <h3>Quotation Form</h3>
      </slot>
    `;
  }
}