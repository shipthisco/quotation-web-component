import { html, css, nothing } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { BaseField } from './base-field';
import { shipthisApi } from '../../../service/shipthis.service';

@customElement('shipthis-reference-field')
export class ShipthisReferenceField extends BaseField {
  @state() private items: any[] = [];
  @state() private loading = false;
  @state() private searchText = '';
  @state() private showDropdown = false;
  
  @property({ type: Object }) opData: any = {};
  @property({ type: Object }) global_op_data: any = {};

  private searchTimeout: any;

  static styles = css`
    ${BaseField.styles}
    .reference-container {
      position: relative;
    }
    
    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      z-index: 100;
      max-height: 250px;
      overflow-y: auto;
      list-style: none;
      padding: 4px;
      margin: 4px 0 0;
    }

    .dropdown li {
      padding: 10px 12px;
      cursor: pointer;
      font-size: 14px;
      border-radius: 6px;
      transition: background 0.2s;
    }

    .dropdown li:hover {
      background: #f1f5f9;
      color: var(--qwc-primary, #0661FC);
    }

    .loader {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 11px;
      color: #94a3b8;
    }

    .no-results {
      padding: 12px;
      text-align: center;
      color: #64748b;
      font-size: 13px;
    }
  `;

  async firstUpdated() {
    if (this.value) {
      if (typeof this.value === 'string') {
        // Fetch full object if we only have ID
        this.fetchById(this.value);
      } else if (this.value.__display) {
        this.searchText = this.value.__display;
      } else {
        this.searchText = this.generateDisplayString(this.value);
      }
    }
  }

  protected renderInput() {
    return html`
      <div class="reference-container">
        <input 
          type="text" 
          .value=${this.searchText}
          @input=${this.handleSearchInput}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          placeholder=${this.placeholder || 'Search...'}
          ?disabled=${this.disabled || this.read_only}
        />
        ${this.showDropdown ? html`
          <ul class="dropdown">
            ${this.loading ? html`<li class="no-results">Searching...</li>` : nothing}
            ${!this.loading && this.items.length === 0 ? html`<li class="no-results">No results found</li>` : nothing}
            ${this.items.map(item => html`
              <li @mousedown=${() => this.selectItem(item)}>${item.__display}</li>
            `)}
          </ul>
        ` : nothing}
        ${this.loading ? html`<span class="loader">...</span>` : nothing}
      </div>
    `;
  }

  private handleSearchInput(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    this.searchText = val;
    this.showDropdown = true;
    
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.fetchResults(val);
    }, 300);
  }

  private handleFocus() {
    if (this.searchText || !this.value) {
        this.showDropdown = true;
        if (this.items.length === 0) {
            this.fetchResults(this.searchText);
        }
    }
  }

  private handleBlur() {
    // Timeout to allow mousedown on dropdown to trigger first
    setTimeout(() => {
        this.showDropdown = false;
        // If nothing selected and searchText cleared, clear value
        if (!this.searchText && this.value) {
            this.value = null;
            this.validate();
            this.dispatchChange();
        } else if (this.value) {
            // Restore display text if user changed it but didn't select
            this.searchText = this.value.__display || this.generateDisplayString(this.value);
            this.validate();
            this.dispatchChange();
        }
    }, 200);
  }

  private async fetchResults(query: string) {
    if (!this.field?.reference_meta?.view_name) return;
    
    this.loading = true;
    try {
      const meta = this.field.reference_meta;
      
      const options: any = {
        fields: meta.fields || meta.dependent_fields,
        display_fields: meta.display_fields,
        filter_txt: query,
        general_filters: meta.general_filter || '{}',
        number_of_items: 20
      };

      if (meta.is_filtered_reference && meta.filter_field_ids) {
        // Construct input filters if it's a filtered reference
        const input_filters: any = {};
        for (const filter of meta.filter_field_ids) {
          const path = filter.field_accessor.split('.');
          let val = this.global_op_data || this.opData;
          for (const part of path) {
            val = val?.[part];
          }
          if (val) {
            input_filters[filter.field_name] = val;
          }
        }
        if (Object.keys(input_filters).length > 0) {
          options.input_filters = JSON.stringify(input_filters);
        }
      }

      const data = await shipthisApi.getAutocompleteResults(meta.view_name, options);
      this.items = (data?.items || []).map((item: any) => ({
        ...item,
        __display: this.generateDisplayString(item)
      }));
    } catch (error) {
      console.error('Error fetching autocomplete results:', error);
    } finally {
      this.loading = false;
    }
  }

  private async fetchById(id: string) {
    // Search for the specific ID to get the full object
    // In a real scenario, this would call getEntryById
    if (!this.field?.reference_meta?.view_name) return;
    
    this.loading = true;
    const meta = this.field.reference_meta;
    const options = {
      fields: meta.fields || meta.dependent_fields,
      display_fields: meta.display_fields,
      filter_txt: '',
      general_filters: JSON.stringify({ _id: { $oid: id } }),
      number_of_items: 1
    };

    const data = await shipthisApi.getAutocompleteResults(meta.view_name, options);
    if (data?.items?.[0]) {
      this.value = data.items[0];
      this.value.__display = this.generateDisplayString(this.value);
      this.searchText = this.value.__display;
    }
    this.loading = false;
  }

  private generateDisplayString(item: any): string {
    const displayFields = this.field?.reference_meta?.display_fields || ['name'];
    return displayFields
      .map((path: string) => {
        const parts = path.split('.');
        let val = item;
        for (const part of parts) {
          val = val?.[part];
        }
        return val;
      })
      .filter(v => v !== undefined && v !== null && v !== '')
      .join(' - ');
  }

  private selectItem(item: any) {
    this.value = item;
    this.searchText = item.__display;
    this.showDropdown = false;
    this.validate();
    this.dispatchChange();
  }
}
