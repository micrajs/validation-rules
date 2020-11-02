import { ValidationRule } from '@micra/validator';
import { required } from '../required';

export interface RequiredIfOptions {
  message?: string;
  field: string;
  value: any;
}

export const requiredIf = ({
  field,
  value,
  message = `validation.requiredIf`,
}: RequiredIfOptions): ValidationRule => ({
  check(context) {
    if (context.data[field] === value) {
      return required().check(context);
    }

    return true;
  },
  message: () => ({ message, variables: { field, value } }),
});
