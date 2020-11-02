import { ValidationRule, ValidationRuleGenerator } from '@micra/validator';

export const optional = (
  rules: ValidationRule[] = [],
  fallback?: any,
): ValidationRuleGenerator => ({ dto, field, data }) => {
  if (Object.keys(data).includes(field as string)) {
    return rules;
  }

  if (fallback) {
    dto[field as string] = fallback;
  }

  return [];
};
