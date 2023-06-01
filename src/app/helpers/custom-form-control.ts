import { AsyncValidatorFn, FormControl, ValidatorFn } from "@angular/forms";
import { asyncValidator } from "../validators";

export class BaseFormControl extends FormControl {
  constructor(
    value = '',
    asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[] | null | undefined,
    validators?: ValidatorFn | ValidatorFn[] | null | undefined,
    updateOn: 'change' | 'blur' | 'submit' | undefined = 'change',
    nonNullable = true,
  ) {
    super(value, { asyncValidators, validators, updateOn, nonNullable })
  }
}

export class NameFormControl extends BaseFormControl {
  constructor(
    value = '',
    asyncValidators = asyncValidator({ required: 1, minlength: 4, maxlength: 20 }),
    validators?: ValidatorFn | ValidatorFn[] | null | undefined,
    updateOn?: 'change' | 'blur' | 'submit' | undefined,
    nonNullable = true,
  ) {
    super(value, asyncValidators, validators, updateOn, nonNullable);
  }
}

export class EmailFormControl extends BaseFormControl {
  constructor(
    value = '',
    asyncValidators = asyncValidator({ required: 1, email: 1 }),
    validators?: ValidatorFn | ValidatorFn[] | null | undefined,
    updateOn?: 'change' | 'blur' | 'submit' | undefined,
    nonNullable = true,
  ) {
    super(value, asyncValidators, validators, updateOn, nonNullable);
  }
}

export class PasswordFormControl extends BaseFormControl {
  constructor(
    value = '',
    asyncValidators = asyncValidator({ required: 1, minlength: 4, maxlength: 40 }),
    validators?: ValidatorFn | ValidatorFn[] | null | undefined,
    updateOn?: 'change' | 'blur' | 'submit' | undefined,
    nonNullable = true,
  ) {
    super(value, asyncValidators, validators, updateOn, nonNullable);
  }
}

export class ConfirmPasswordFormControl extends BaseFormControl {
  constructor(
    value = '',
    asyncValidators = asyncValidator({ required: 1 }),
    validators?: ValidatorFn | ValidatorFn[] | null | undefined,
    updateOn?: 'change' | 'blur' | 'submit' | undefined,
    nonNullable = true,
  ) {
    super(value, asyncValidators, validators, updateOn, nonNullable);
  }
}

export class TermsFormControl extends BaseFormControl {
  constructor(
    value = '',
    asyncValidators = asyncValidator({ required: 1 }),
    validators?: ValidatorFn | ValidatorFn[] | null | undefined,
    updateOn?: 'change' | 'blur' | 'submit' | undefined,
    nonNullable = true,
  ) {
    super(value, asyncValidators, validators, updateOn, nonNullable);
  }
}
