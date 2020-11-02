import { ValidationRule } from '@micra/validator';
import { required } from '../required';

export interface RequiredUnlessOptions {
  message?: string;
  field: string;
  value: any;
}

export const requiredUnless = ({
  field,
  value,
  message = `validation.requiredUnless`,
}: RequiredUnlessOptions): ValidationRule => ({
  check(context) {
    if (context.data[field] !== value) {
      return required().check(context);
    }

    return true;
  },
  message: () => ({ message, variables: { field, value } }),
});
