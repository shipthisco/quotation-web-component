import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('shipthis-quote-footer')
export class ShipthisQuoteFooter extends LitElement {

  static styles = css`
    :host {
      display:block;
      margin-top:20px;
      border-top:1px solid #eee;
      padding-top:12px;
    }
  `;

  render() {
    return html`
      <slot>
        <button>Submit</button>
      </slot>
    `;
  }
}