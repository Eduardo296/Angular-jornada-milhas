import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DadosBusca } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formBusca: FormGroup;

  constructor() {
    const somenteIda = new FormControl(false, [Validators.required]);
    const dataVolta = new FormControl(null, [Validators.required]);
    this.formBusca = new FormGroup({
      somenteIda,
      origem: new FormControl(null, [Validators.required]),
      destino: new FormControl(null, [Validators.required]),
      tipo: new FormControl("Executiva"),
      adultos: new FormControl(3),
      criancas: new FormControl(0),
      bebes: new FormControl(1),
      dataIda: new FormControl(null, [Validators.required]),
      dataVolta,
      conexoes: new FormControl(null)
    });
    somenteIda.valueChanges.subscribe((somenteIdaValue: boolean | null) => {
      if (somenteIdaValue) {
        dataVolta.disable();
        dataVolta.clearValidators();
      } else {
        dataVolta.enable();
        dataVolta.setValidators([Validators.required]);
      }
      dataVolta.updateValueAndValidity();
    });
  }
  obterControle<T>(nome: string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control)
      throw new Error(`FormControl com nome "${nome}" não existe.`)
    return control as FormControl<T>
  }

  obterDadosBusca(): DadosBusca {
  const origem = this.obterControle<any>('origem').value;
  const destino = this.obterControle<any>('destino').value;
  const somenteIda = this.obterControle<boolean>('somenteIda').value;
  const tipo = this.obterControle<string>('tipo').value;
  const adultos = this.obterControle<number>('adultos').value;
  const criancas = this.obterControle<number>('criancas').value;
  const bebes = this.obterControle<number>('bebes').value;
  const dataIda = this.obterControle<Date>('dataIda').value;
  const dataVolta = this.obterControle<Date>('dataVolta').value;

  if (!origem?.id) throw new Error('Origem inválida');
  if (!destino?.id) throw new Error('Destino inválido');
  if (!dataIda) throw new Error('Data de ida inválida');

  const dadosBusca: DadosBusca = {
    pagina: 1,
    porPagina: 50,
    somenteIda: somenteIda ?? false,
    origemId: origem.id,
    destinoId: destino.id,
    tipo: tipo ?? 'Econômica',
    passageirosAdultos: adultos ?? 1,
    passageirosCriacas: criancas ?? 0,
    passageirosBebes: bebes ?? 0,
    dataIda: dataIda.toISOString()
  };

  if (!somenteIda && dataVolta) {
    dadosBusca.dataVolta = dataVolta.toISOString();
  }
  return dadosBusca;
}
  get formEstaValido() {
    return this.formBusca.valid
  }
}
