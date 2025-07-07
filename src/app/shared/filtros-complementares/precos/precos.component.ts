import { Component } from '@angular/core';
import { LabelComponent } from "../label/label.component";
import { MatSliderModule } from '@angular/material/slider';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-precos',
  imports: [
    CommonModule,
    LabelComponent,
    MatSliderModule,
    CurrencyPipe
  ],
  templateUrl: './precos.component.html',
  styleUrl: './precos.component.scss'
})
export class PrecosComponent {
  precoMin?: number = 0;
  precoMax?: number = 5000
}
