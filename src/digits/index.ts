import { ValidationRule } from '@micra/validator';

export interface DigitsOptions {
  message?: string;
  length: number;
}

export const digits = ({
  length,
  message = `validation.digits`,
}: DigitsOptions): ValidationRule => ({
  check({ value }) {
    return !isNaN(value) && String(value).length === length;
  },
  message: () => ({ message, variables: { length } }),
});
