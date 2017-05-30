import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { Type } from '@angular/core';
export interface FieldMetadata {
  name?: string;
  type?: Type<any>;
  arrayElementType?: Type<any>;
  validators?: ValidatorFn[];
  asyncValidators?: AsyncValidatorFn[];

  label?: string;
  css?: string;
  editor?: Type<any>;

  isGroup?: boolean;
  isArray?: boolean;
  isControl?: boolean;
}
