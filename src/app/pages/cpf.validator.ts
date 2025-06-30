import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function ValidateCPF(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let cpf = control.value;
    if (!cpf) return null;

    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
      return { cpfInvalido: true };
    }
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return { cpfInvalido: true };
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return { cpfInvalido: true };

    return null;
  };
}