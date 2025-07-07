import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LabelComponent } from '../label/label.component';
import { FormControl } from '@angular/forms';
import { FormBuscaService } from '../../../core/services/form-busca.service';

interface OpcaoParada {
  display: string;
  value: string;
}

@Component({
  selector: 'app-paradas',
  imports: [
    CommonModule,
    MatCheckboxModule,
    LabelComponent
  ],
  templateUrl: './paradas.component.html',
  styleUrl: './paradas.component.scss'
})
export class ParadasComponent implements OnInit {
  opcoesSelecionadas: OpcaoParada | null = null
  opcoes = [
    {
      display: "Direto",
      value: "0"
    },
    {
      display: "1 conexão",
      value: "1"
    },
    {
      display: "2 conexões",
      value: "2"
    },
    {
      display: "Mais de 2 conexões",
      value: "3"
    },
  ]
  conexoesControl: FormControl<number | null>

  constructor(private formBuscaService: FormBuscaService) {
    this.conexoesControl = this.formBuscaService.obterControle<number>('conexoes');
  }
  ngOnInit(): void {
    this.conexoesControl.valueChanges.subscribe(
      (value) => {
        if (!value) {
          this.opcoesSelecionadas = null
        }
      }
    )
  }

   alternarParada(opcao: OpcaoParada, checked: boolean){
    if(!checked){
      this.opcoesSelecionadas = null;
      this.formBuscaService.formBusca.patchValue({
        conexoes: null
      })
      return
    }
    this.opcoesSelecionadas = opcao
    this.formBuscaService.formBusca.patchValue({
      conexoes: Number(opcao.value)
    })
  }

  paradaSelecionada(opcao: OpcaoParada): boolean {
    return this.opcoesSelecionadas === opcao
  }

  incluirParada(opcao: OpcaoParada){
    if(!this.opcoesSelecionadas) {
      return false
    }
    return this.opcoesSelecionadas.value > opcao.value
  }
}
