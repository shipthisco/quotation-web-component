
export class ConditionService {
  /**
   * Evaluates a condition based on the data and metadata.
   * @param conditionName The field ID to check.
   * @param conditionValue The value to match (comma-separated string).
   * @param data The context data (formData).
   * @param baseKey Optional base key for nested accessors.
   * @returns boolean Whether the condition is met.
   */
  evaluateCondition(conditionName: string, conditionValue: any, data: any, baseKey: string = ''): boolean {
    if (!conditionName || !data) return false;

    const isNegated = conditionName.startsWith('!');
    const actualKey = isNegated ? conditionName.substring(1) : conditionName;
    const fullPath = baseKey ? `${baseKey}${actualKey}` : actualKey;

    const val = this.getDataViaAccessor(data, fullPath);
    
    // Convert both to string for loose comparison as per monorepo logic
    const currentValStr = String(val !== undefined && val !== null ? val : '');
    const targetValues = String(conditionValue).split(',').map(v => v.trim());

    const matches = targetValues.some(v => currentValStr === v);

    return isNegated ? !matches : matches;
  }

  /**
   * Simple accessor for nested data paths (e.g., "guest_detail.email")
   */
  private getDataViaAccessor(data: any, path: string): any {
    if (!path) return data;
    return path.split('.').reduce((obj, key) => (obj && obj[key] !== undefined ? obj[key] : undefined), data);
  }
}

export const conditionService = new ConditionService();
