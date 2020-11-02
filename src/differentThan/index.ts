import { ValidationRule } from '@micra/validator';

export interface DifferentThanOptions {
  message?: string;
  field: string;
}

export const differentThan = ({
  field,
  message = `validation.differentThan`,
}: DifferentThanOptions): ValidationRule => ({
  check({ data, value }) {
    return JSON.stringify(data[field]) !== JSON.stringify(value);
  },
  message: () => ({ message, variables: { field } }),
});
