import { ValidationRule } from '@micra/validator';

export interface AcceptedOptions {
  message?: string;
}

export const accepted = <T = any>({
  message = `validation.accepted`,
}: AcceptedOptions = {}): ValidationRule<T> => ({
  check({ value }) {
    return value === true || value === 1 || value === 'on' || value === 'yes';
  },
  message: () => message,
});
