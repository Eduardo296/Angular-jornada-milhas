import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { UnidadeFederativaService } from '../../../core/services/unidade-federativa-service.service';
import { UnidadeFederativa } from '../../../core/types/types';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown-uf',
  imports: [
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './dropdown-uf.component.html',
  styleUrl: './dropdown-uf.component.scss'
})

export class DropdownUfComponent implements OnInit {
  @Input() label: string = '';
  @Input() matPrefix: string = '';
  @Input() control: FormControl = new FormControl();

  unidadesFederativa: UnidadeFederativa[] = [];
  filteredOptions!: Observable<string[]>;

  constructor(private unidadeFederativaService: UnidadeFederativaService) {}

  ngOnInit(): void {
    this.unidadeFederativaService.listar().subscribe(dados => {
      this.unidadesFederativa = dados;
      this.filteredOptions = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.unidadesFederativa
      .map(dados => typeof dados === 'string' ? dados : dados.nome)
      .filter(dados => dados.toLowerCase().includes(filterValue));
  }
}
