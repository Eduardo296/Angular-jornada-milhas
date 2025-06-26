import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seletor-passageiro',
  imports: [],
  templateUrl: './seletor-passageiro.component.html',
  styleUrl: './seletor-passageiro.component.scss'
})
export class SeletorPassageiroComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';

  value: number = 0;
  onChange = (value: number) => {}
  onTouch = () => {}

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  increment(): void {
    this.value++;
    this.onChange(this.value);
    this.onTouch();
  }

  decrement(): void {
    if (this.value > 0) {
      this.value--;
      this.onChange(this.value);
      this.onTouch();
    }
  }
  

}
