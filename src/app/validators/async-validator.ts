import { AbstractControl } from "@angular/forms";
import { Observable, of } from "rxjs";

const emailValidationRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const asyncValidator = (validator: { [key: string]: number }) => (c: AbstractControl): Observable<any> => {
  const error: any = {};

  if (validator['required'] && !c.value?.trim?.()) {
    error.required = true;
  }
  if (validator['minlength'] && c.value?.length < validator['minlength']) {
    error.minlength = true;
  }
  if (validator['maxlength'] && c.value?.length > validator['maxlength']) {
    error.maxlength = true;
  }
  if (validator['email'] && !c.value?.toLocaleLowerCase?.()?.match?.(emailValidationRegexp)) {
    error.email = true;
  }

  return of(error);
}
