import { Component, Input } from '@angular/core';
import { Passagem } from '../../core/types/types';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe, DatePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-passagem',
  imports: [
    MatCardModule,
    CurrencyPipe,
    DatePipe,
    CommonModule
  ],
  templateUrl: './passagem.component.html',
  styleUrl: './passagem.component.scss'
})
export class PassagemComponent {
   @Input() passagem!: Passagem ;
   @Input() textoIdaVolta!: string;
}
