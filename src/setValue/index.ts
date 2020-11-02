import { ValidationRuleGenerator } from '@micra/validator';

export const setValue = (value?: any): ValidationRuleGenerator => ({
  dto,
  field,
}) => {
  dto[field as string] = value;

  return [];
};
