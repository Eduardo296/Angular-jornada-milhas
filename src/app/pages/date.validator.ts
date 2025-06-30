import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dataNascimento(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const date = control.value;
    if (date > Date.now()) {
        return { date: true}
    };
    if (date <= Date.now()){
        return { date: false }
    }
    return { date: false }
  };
}