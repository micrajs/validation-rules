import { ValidationRule } from '@micra/validator';

export interface RequiredOptions {
  message?: string;
}

export const required = ({
  message = `validation.required`,
}: RequiredOptions = {}): ValidationRule => ({
  check({ value }) {
    if (typeof value === 'string') {
      return value.replace(/\s+/g, '').trim() !== '';
    }

    return value != null;
  },
  message: () => message,
});
