import { ValidationRule } from '@micra/validator';

export interface IsBooleanOptions {
  message?: string;
}

export const isBoolean = ({
  message = `validation.isBoolean`,
}: IsBooleanOptions = {}): ValidationRule => ({
  check({ value }) {
    return (
      typeof value === 'boolean' ||
      (typeof value === 'object' &&
        value !== null &&
        typeof value.valueOf() === 'boolean')
    );
  },
  message: () => message,
});
