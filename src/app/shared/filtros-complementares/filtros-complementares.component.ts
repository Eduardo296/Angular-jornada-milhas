import { Component, EventEmitter, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ParadasComponent } from './paradas/paradas.component';
import { PrecosComponent } from './precos/precos.component';
import { CompanhiasComponent } from './companhias/companhias.component';
import { FormBuscaService } from '../../core/services/form-busca.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtros-complementares',
  imports: [
    CommonModule,
    CardComponent,
    MatIconModule,
    ParadasComponent,
    PrecosComponent,
    CompanhiasComponent,
    ReactiveFormsModule
  ],
  templateUrl: './filtros-complementares.component.html',
  styleUrl: './filtros-complementares.component.scss'
})
export class FiltrosComplementaresComponent {
  @Output() realizarBusca = new EventEmitter();
  constructor(public formBuscaService: FormBuscaService) {

  }
  busca() {
    if(!this.formBuscaService.formEstaValido) {
      this.formBuscaService.formBusca.markAllAsTouched();
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      return
    }
    this.realizarBusca.emit(this.formBuscaService.obterDadosBusca());
  }
}
