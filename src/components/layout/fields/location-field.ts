import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { BaseField } from './base-field';
import { shipthisApi } from '../../../service/shipthis.service';

@customElement('shipthis-location-field')
export class ShipthisLocationField extends BaseField {
  @state() private searchResults: any[] = [];
  @state() private showDropdown = false;
  @state() private isSearching = false;
  private searchTimeout: any;

  static styles = css`
    ${BaseField.styles}
    .location-container {
      position: relative;
    }
    .autocomplete-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #cbd5e1;
      border-top: none;
      border-radius: 0 0 6px 6px;
      z-index: 1000;
      max-height: 250px;
      overflow-y: auto;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    .suggestion-item {
      padding: 10px 12px;
      cursor: pointer;
      font-size: 13px;
      border-bottom: 1px solid #f1f5f9;
      transition: background 0.2s;
    }
    .suggestion-item:last-child {
      border-bottom: none;
    }
    .suggestion-item:hover {
      background: #f8fafc;
    }
    .suggestion-item .bold {
      font-weight: 600;
      color: #1e293b;
    }
    .suggestion-item .description {
      color: #64748b;
      font-size: 12px;
    }
    .loader {
      padding: 10px;
      text-align: center;
      color: #64748b;
      font-size: 12px;
    }
    .custom-location-btn {
      padding: 10px 12px;
      cursor: pointer;
      color: #3b82f6;
      font-size: 13px;
      font-weight: 500;
      border-top: 1px solid #e2e8f0;
      background: #f8fafc;
    }
  `;

  protected handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const query = target.value;
    
    // Update raw value for the input field
    this.value = query;

    if (this.searchTimeout) clearTimeout(this.searchTimeout);

    if (query.length < 3) {
      this.searchResults = [];
      this.showDropdown = false;
      return;
    }

    this.searchTimeout = setTimeout(() => {
      this.performSearch(query);
    }, 300);
  }

  private async performSearch(query: string) {
    this.isSearching = true;
    this.showDropdown = true;
    try {
      const data = await shipthisApi.searchLocation(query);
      this.searchResults = data?.items || [];
    } catch (err) {
      console.error('Location search failed', err);
    } finally {
      this.isSearching = false;
    }
  }

  private async selectLocation(item: any) {
    this.showDropdown = false;
    this.searchResults = [];
    
    try {
      const details = await shipthisApi.getLocationDetails(item.place_id, item.description);
      if (details) {
        this.value = details;
        this.validate();
        this.dispatchChange();
      }
    } catch (err) {
      console.error('Failed to get place details', err);
    }
  }

  private handleBlur() {
    // Delay closing dropdown to allow for clicks on items
    setTimeout(() => {
      this.showDropdown = false;
    }, 200);
  }

  private addCustomLocation() {
    // If user typed something and it's not found, treat it as a custom string
    if (typeof this.value === 'string' && this.value.trim()) {
      const customValue = {
        description: this.value,
        main_text: this.value,
        __display: this.value,
        type: 'custom'
      };
      this.value = customValue;
      this.validate();
      this.dispatchChange();
    }
    this.showDropdown = false;
  }

  protected renderInput() {
    const displayValue = typeof this.value === 'object' ? (this.value as any)?.description || '' : this.value || '';

    return html`
      <div class="location-container">
        <input
          type="text"
          .value=${displayValue}
          placeholder=${this.placeholder || 'Search for a location...'}
          ?disabled=${this.disabled}
          ?readonly=${this.read_only}
          @input=${this.handleInput}
          @blur=${this.handleBlur}
          @focus=${() => displayValue.length >= 3 && (this.showDropdown = true)}
          class=${this.isInvalid ? 'invalid' : ''}
          autocomplete="off"
        />
        
        ${this.showDropdown ? html`
          <div class="autocomplete-dropdown">
            ${this.isSearching ? html`<div class="loader">Searching...</div>` : ''}
            
            ${this.searchResults.map(item => html`
              <div class="suggestion-item" @click=${() => this.selectLocation(item)}>
                <div class="bold">${item.bold || item.main_text}</div>
                <div class="description">${item.description}</div>
              </div>
            `)}

            ${!this.isSearching && this.searchResults.length === 0 ? html`
               <div class="suggestion-item" style="cursor: default; color: #94a3b8;">No locations found</div>
            ` : ''}

            <div class="custom-location-btn" @click=${this.addCustomLocation}>
              + Use "${displayValue}" as custom location
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  public validate(): boolean {
    const val = this.value;
    const isRequired = this.required || !!this.field?.attributes?.required;

    if (!val || (typeof val === 'object' && !Object.keys(val).length)) {
      this.isInvalid = isRequired;
      this.errorMessage = this.isInvalid ? 'This field is required' : '';
      return !this.isInvalid;
    }

    this.isInvalid = false;
    this.errorMessage = '';
    return true;
  }
}
