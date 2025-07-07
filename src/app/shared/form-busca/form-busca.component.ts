import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePipe, CommonModule } from '@angular/common'
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { DropdownUfComponent } from '../dropdown-uf/dropdown-uf.component';
import { FormBuscaService } from '../../core/services/form-busca.service';
import { FormControlPipe } from '../../pages/cadastro/formControl.form';

export const MY_DATE_FORMATS = {
  parse: { dateInput: 'DD/MM/YYYY' },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MM YYYY'
  }
};

registerLocaleData(localePt, 'pt-BR');

@Component({
  selector: 'app-form-busca',
  imports: [
    CardComponent,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    MatNativeDateModule,
    MatButtonModule,
    DropdownUfComponent,
    ReactiveFormsModule,
    FormControlPipe
  ],
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss',
  providers: [
    DatePipe,
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ]
})

export class FormBuscaComponent {
  @Output() realizarBusca = new EventEmitter();
  constructor(
    public dialog: MatDialog,
    public formBuscaService: FormBuscaService,
  ) {
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    });
  }

  buscar() {
    if (this.formBuscaService.formEstaValido) {
      const formBusca = this.formBuscaService.obterDadosBusca();
      this.realizarBusca.emit(formBusca)
    } else {
       this.formBuscaService.formBusca.markAllAsTouched();
    }

  }
  

}