import { ValidationRule } from '@micra/validator';

export interface IsArrayOptions {
  message?: string;
}

export const isArray = ({
  message = `validation.isArray`,
}: IsArrayOptions = {}): ValidationRule => ({
  check({ value }) {
    return Object.prototype.toString.call(value) === '[object Array]';
  },
  message: () => message,
});
