import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dataNascimento(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return { date: true }; 

    const date = value instanceof Date ? value : new Date(value);

    if (isNaN(date.getTime())) return { date: true };

    if (date > new Date()) return { date: true };

    if (date.getFullYear() < 1900) return { date: true };

    return null;
  };
}