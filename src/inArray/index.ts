import { ValidationRule } from '@micra/validator';

export interface InArrayOptions {
  message?: string;
  field: string;
}

export const inArray = ({
  field,
  message = `validation.inArray`,
}: InArrayOptions): ValidationRule => ({
  check({ data, value }) {
    return (
      Object.prototype.toString.call(data[field]) === '[object Array]' &&
      data[field].includes(value)
    );
  },
  message: () => ({ message, variables: { field } }),
});
