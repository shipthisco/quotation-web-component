
export class ValidatorService {
  /**
   * Validates a value against a regex pattern.
   * @param value The value to validate.
   * @param regex The regex pattern string.
   * @param example An example of valid input (used for error message).
   * @returns An error message if invalid, otherwise null.
   */
  static validateRegex(value: any, regex: string, example?: string): string | null {
    if (!value || !regex) return null;
    try {
      const re = new RegExp(regex);
      if (!re.test(value)) {
        return `Pattern Invalid${example ? ` : Example - ${example}` : ''}`;
      }
    } catch (e) {
      console.error('Invalid regex pattern:', regex);
    }
    return null;
  }

  /**
   * Checks if a value is present (for required fields).
   * @param value The value to check.
   * @returns An error message if missing, otherwise null.
   */
  static validateRequired(value: any): string | null {
    if (value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0)) {
      return 'This field is required';
    }
    return null;
  }

  /**
   * Validates a numeric value against a range.
   * @param value The value to validate.
   * @param min The minimum allowed value.
   * @param max The maximum allowed value.
   * @returns An error message if out of range, otherwise null.
   */
  static validateNumberRange(value: any, min?: number, max?: number): string | null {
    if (value === undefined || value === null || value === '') return null;
    const num = parseFloat(value);
    if (isNaN(num)) return 'Invalid number';
    if (min !== undefined && num < min) return `Value must be at least ${min}`;
    if (max !== undefined && num > max) return `Value must be no more than ${max}`;
    return null;
  }

  /**
   * Validates an email address.
   * @param value The value to validate.
   * @returns An error message if invalid, otherwise null.
   */
  static validateEmail(value: any): string | null {
    if (!value) return null;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Invalid email address';
    }
    return null;
  }

  /**
   * Validates a URL.
   * @param value The value to validate.
   * @returns An error message if invalid, otherwise null.
   */
  static validateUrl(value: any): string | null {
    if (!value) return null;
    try {
      new URL(value);
      return null;
    } catch (e) {
      return 'Invalid URL';
    }
  }
}

export const validatorService = ValidatorService;