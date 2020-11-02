import { ValidationRule } from '@micra/validator';

export interface LengthBetweenOptions {
  message?: string;
  min: string | number;
  max: string | number;
}

export const lengthBetween = ({
  min,
  max,
  message = `validation.lengthBetween`,
}: LengthBetweenOptions): ValidationRule => {
  if (min === max) {
    throw new Error(`lengthBetween: min and max should be different`);
  }

  return {
    check({ value }) {
      const num = value.length;
      const end = Number(max);
      const initial = Number(min);

      if (!num) {
        return false;
      }

      return initial < end
        ? num > initial && num < end
        : num < initial && num > end;
    },
    message: () => ({ message, variables: { min, max } }),
  };
};
