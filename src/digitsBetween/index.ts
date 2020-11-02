import { ValidationRule } from '@micra/validator';

export interface DigitsBetweenOptions {
  message?: string;
  min: string | number;
  max: string | number;
}

export const digitsBetween = ({
  min,
  max,
  message = `validation.digitsBetween`,
}: DigitsBetweenOptions): ValidationRule => ({
  check({ value }) {
    if (min === max) {
      throw new Error(`digitsBetween: min and max should be different`);
    }

    if (isNaN(value)) {
      return false;
    }

    const num = String(value).length;
    const end = Number(max);
    const initial = Number(min);

    return initial < end
      ? num > initial && num < end
      : num < initial && num > end;
  },
  message: () => ({
    message,
    variables: {
      min,
      max,
    },
  }),
});
