import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

/** A hero's name can't match the given regular expression */
export function forbiddenSpecialCharValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value); // check regex
      return forbidden ? {specialChar: {value: control.value}} : null;
    };
  }