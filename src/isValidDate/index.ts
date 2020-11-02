import { ValidationRule } from '@micra/validator';

export interface IsValidDateOptions {
  message?: string;
}

export const isValidDate = ({
  message = `validation.isValidDate`,
}: IsValidDateOptions = {}): ValidationRule => ({
  check({ value }) {
    if (value instanceof Date) {
      return !isNaN(value as any);
    }

    if (isNaN(Date.parse(value))) {
      return false;
    }

    const date = new Date(value);
    return (
      !isNaN(date.getFullYear()) &&
      !isNaN(date.getMonth()) &&
      !isNaN(date.getDate())
    );
  },
  message: () => message,
});
