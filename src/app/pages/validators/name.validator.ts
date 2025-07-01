import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function minWordsValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value || typeof value !== 'string') return { minWords: true };

    const words = value.trim().split(/\s+/);
    if (words.length < 2) {
      return { minWords: true };
    }
    return null;
  };
}