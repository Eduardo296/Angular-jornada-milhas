import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { SeletorPassageiroComponent } from './seletor-passageiro/seletor-passageiro.component';

@Component({
  selector: 'app-modal',
  imports: [
    MatChipsModule,
    SeletorPassageiroComponent
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  constructor(public dialog: MatDialog) {}
  formBusca = new FormControl();
  adultos: number = 1;
  criancas: number = 0;
  bebes: number = 0;

    getDescricaoPassageiros (): string {
    let descricao = ''

    const adultos = this.formBusca.get('adultos')?.value;
    if (adultos && adultos > 0) {
      descricao += `${adultos} adulto${adultos > 1 ? 's' : ''}`;
    }
  
    const criancas = this.formBusca.get('criancas')?.value;
    if (criancas && criancas > 0) {
      descricao += `${descricao ? ', ' : ''}${criancas} criança${criancas > 1 ? 's' : ''}`;
    }
  
    const bebes = this.formBusca.get('bebes')?.value;
    if (bebes && bebes > 0) {
      descricao += `${descricao ? ', ' : ''}${bebes} bebê${bebes > 1 ? 's' : ''}`;
    }
  
    return descricao
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}
