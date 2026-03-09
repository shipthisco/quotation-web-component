import axios from 'axios';
import { ShipthisAPI } from 'shipthisapi-js';

class ShipthisApiService {
    private client: any;
    private config: any;
    
    get API_URL() {
      const collection = this.config?.collection || 'third_party_quotation';
      return `https://main-app-hypercorn-hypercorn-us-central1-fast-dev-pelq277qkq-uc.a.run.app/api/v3/getrelated/${collection}`;
    }

  async init(config: any) {
    this.config = config;
    const api = new ShipthisAPI({
      xApiKey: config.apiKey,
      organisationId: config.organisationId,
      userType: 'employee'
    });

    try {
      const response = await api.connect();
      this.client = api;
      return response;
    } catch (error: any) {
      this.client = null;
      throw error;
    }
  }

  async createQuotation(payload: any) {
    return this.client.quotation.create(payload);
  }
    
    async getMetadata(apiKey: string, organisationId: string, userType: string = 'employee'): Promise<any>{
    return axios.get(this.API_URL, {
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'organisation': organisationId,
        'user-type': userType
    }
    }).then((response) => {
    return response.data.data;
    }).catch((error) => {
    return null;
    });
    }

  async getFormConfig() {
    return this.client.widget.getFormConfig();
  }

  async getAutocompleteResults(viewName: string, options: any) {
    if (!this.client) {
        console.error('ShipthisApiService not initialized');
        return { items: [] };
    }
    
    try {
      // Use the SDK's built-in autocomplete method
      return await this.client.getGenericAutoComplete(this.client, viewName, options);
    } catch (err) {
      console.error('SDK Autocomplete failed:', err);
      return { items: [] };
    }
  }

  async searchLocation(query: string) {
    if (!this.client) return { items: [] };
    try {
      return await this.client.searchLocation(query);
    } catch (err) {
      console.error('Location search failed:', err);
      return { items: [] };
    }
  }

  async getLocationDetails(placeId: string, description: string) {
    if (!this.client) return null;
    try {
      return await this.client.selectGoogleLocation(this.client, 'search-place', { placeId, description });
    } catch (err) {
      console.error('Get location details failed:', err);
      return null;
    }
  }

  /**
   * Creates a new record in the given collection using the SDK.
   * @param collectionName - The target collection (e.g. 'third_party_quotation')
   * @param data - The form payload to submit
   */
  async createCollectionItem(collectionName: string, data: any): Promise<any> {
    if (!this.client) throw new Error('ShipthisApiService not initialized');
    try {
      return await this.client.createGenericCollectionItem(this.client, collectionName, data);
    } catch (err) {
      console.error('Create collection item failed:', err);
      throw err;
    }
  }
}

export const shipthisApi = new ShipthisApiService();