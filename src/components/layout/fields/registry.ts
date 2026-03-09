export const FIELD_REGISTRY: Record<string, string> = {
  'single_line': 'shipthis-text-field',
  'multi_line': 'shipthis-textarea-field',
  'boolean': 'shipthis-boolean-field',
  'yes_no': 'shipthis-boolean-field',
  'number': 'shipthis-number-field',
  'currency': 'shipthis-currency-field',
  'reference': 'shipthis-reference-field',
  'embed': 'shipthis-embed-field',
  'list_embed': 'shipthis-list-embed-field',
  'drop_down': 'shipthis-dropdown-field',
  'date': 'shipthis-date-field',
  'date_time': 'shipthis-datetime-field',
  'location': 'shipthis-location-field',
  'email': 'shipthis-text-field',
  'url': 'shipthis-text-field',
  'phone': 'shipthis-phone-field',
  'empty': 'shipthis-empty-field'
};

export function getComponentForField(type: string): string {
  return FIELD_REGISTRY[type] || 'shipthis-text-field';
}
