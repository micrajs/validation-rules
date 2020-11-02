import { ValidationRule } from '@micra/validator';

export interface GreaterThanOptions {
  message?: string;
  min: string | number;
}

export const greaterThan = ({
  min,
  message = `validation.greaterThan`,
}: GreaterThanOptions): ValidationRule => ({
  check({ value }) {
    return Number(value) > Number(min);
  },
  message: () => ({ message, variables: { min } }),
});
