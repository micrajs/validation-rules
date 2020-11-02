import { ValidationRule } from '@micra/validator';

export interface IsStringOptions {
  message?: string;
}

export const isString = ({
  message = `validation.isString`,
}: IsStringOptions = {}): ValidationRule => ({
  check({ value }) {
    return typeof value === 'string' || value instanceof String;
  },
  message: () => message,
});
