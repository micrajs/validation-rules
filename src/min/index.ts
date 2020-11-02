import { ValidationRule } from '@micra/validator';

export interface MinOptions {
  message?: string;
  value: string | number;
}

export const min = ({
  value: minVal,
  message = `validation.min`,
}: MinOptions): ValidationRule => ({
  check({ value }) {
    return Number(value) > Number(minVal);
  },
  message: () => ({ message, variables: { min: minVal } }),
});
