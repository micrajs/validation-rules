import { ValidationRule } from '@micra/validator';

export interface AfterOptions {
  message?: string;
  date: Date | string | number;
}

export const after = ({
  date,
  message = `validation.after`,
}: AfterOptions): ValidationRule => ({
  check({ value }) {
    return new Date(value) > new Date(date);
  },
  message: () => message,
});
