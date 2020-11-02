import { ValidationRule } from '@micra/validator';

export interface GreaterThanOrEqualOptions {
  message?: string;
  min: string | number;
}

export const greaterThanOrEqual = ({
  min,
  message = `validation.greaterThanOrEqual`,
}: GreaterThanOrEqualOptions): ValidationRule => ({
  check({ value }) {
    return Number(value) >= Number(min);
  },
  message: () => ({ message, variables: { min } }),
});
