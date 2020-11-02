import { ValidationRule } from '@micra/validator';

export interface OneOfOptions {
  message?: string;
  options: any[];
}

export const oneOf = ({
  options,
  message = `validation.oneOf`,
}: OneOfOptions): ValidationRule => ({
  check({ value }) {
    return options.includes(value);
  },
  message: () => ({ message, variables: { options } }),
});
