import { ValidationRule } from '@micra/validator';

export interface BeforeOrEqualOptions {
  message?: string;
  date: Date | string | number;
}

export const beforeOrEqual = ({
  date,
  message = `validation.beforeOrEqual`,
}: BeforeOrEqualOptions): ValidationRule => ({
  check({ value }) {
    return new Date(value) <= new Date(date);
  },
  message: () => ({ message, variables: { date } }),
});
