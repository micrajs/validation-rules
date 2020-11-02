import { ValidationRule } from '@micra/validator';

export interface LengthBetweenOrEqualOptions {
  message?: string;
  min: string | number;
  max: string | number;
}

export const lengthBetweenOrEqual = ({
  min,
  max,
  message = `validation.lengthBetweenOrEqual`,
}: LengthBetweenOrEqualOptions): ValidationRule => {
  if (min === max) {
    throw new Error(`lengthBetweenOrEqual: min and max should be different`);
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
        ? num >= initial && num <= end
        : num <= initial && num >= end;
    },
    message: () => ({ message, variables: { min, max } }),
  };
};
