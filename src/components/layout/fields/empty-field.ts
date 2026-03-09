import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseField } from './base-field';

@customElement('shipthis-empty-field')
export class ShipthisEmptyField extends BaseField {
  static styles = css`
    :host {
      display: block;
      min-height: 20px;
    }
  `;

  render() {
    return html`<div class="spacer"></div>`;
  }
}
