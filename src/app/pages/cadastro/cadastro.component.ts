import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../shared/container/container.component';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DropdownUfComponent } from '../../shared/form-busca/dropdown-uf/dropdown-uf.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UnidadeFederativa } from '../../core/types/types';

@Component({
  selector: 'app-cadastro',
  imports: [
    BannerComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ContainerComponent,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    DropdownUfComponent,
    MatDividerModule,
    MatRadioModule,
    CommonModule,
    FooterComponent,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UnidadeFederativa | null>(null, Validators.required);
  constructor(private formBuilder: FormBuilder) {
    
  }
  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required  ],
      nascimento: [null, Validators.required],  
      cpf: [null, Validators.required ],
      email: [null, [Validators.required, Validators.email]],
      confirmarEmail: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(3)]], 
      telefone: [null, Validators.required],  
      cidade: [null, Validators.required],
      estado: this.estadoControl,
      aceitarTermos: [false, Validators.requiredTrue],
      genero: ['outro'],  
    });
  }

  executar() {
    if (true) {
      console.log(this.cadastroForm.valid);
    } else {
      this.cadastroForm.markAllAsTouched();
    }
    
  }

}
