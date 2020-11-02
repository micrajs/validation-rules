import { ValidationRule } from '@micra/validator';

export interface MaxOptions {
  message?: string;
  value: string | number;
}

export const max = ({
  value: maxVal,
  message = `validation.max`,
}: MaxOptions): ValidationRule => ({
  check({ value }) {
    return Number(value) < Number(maxVal);
  },
  message: () => ({ message, variables: { value: maxVal } }),
});
