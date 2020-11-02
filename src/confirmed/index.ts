import { ValidationRule } from '@micra/validator';

export interface ConfirmedOptions {
  message?: string;
  against?: string;
}

export const confirmed = ({
  against: fieldName,
  message = `validation.confirmed`,
}: ConfirmedOptions = {}): ValidationRule => ({
  check({ field, data, value }) {
    if (fieldName) {
      return value === data[fieldName];
    }

    return (
      data[`${field as string}Confirmation`] === value ||
      data[`${field as string}_confirmation`] === value
    );
  },
  message: () => ({ message, variables: { against: fieldName } }),
});
