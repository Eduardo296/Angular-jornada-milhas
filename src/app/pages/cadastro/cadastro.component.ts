import { Component, OnInit, } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../shared/container/container.component';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DropdownUfComponent } from '../../shared/dropdown-uf/dropdown-uf.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { User } from '../../core/types/types';
import { FormControlPipe } from './formControl.form';
import { ValidateCPF } from '../validators/cpf.validator';
import { minWordsValidator } from '../validators/name.validator';
import { dataNascimento } from '../validators/date.validator';
import { CadastroService } from '../../core/services/cadastro.service';
import { Router } from '@angular/router';

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
    ReactiveFormsModule,
    FormControlPipe
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup;
  user: User = { nome: '', email: '', senha: '', dataNascimento: null, telefone: '', cpf: '', cidade: '', endereco: { id: 0, nome: '', sigla: '' }, genero: 'Outro' };

  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroService,
    private router: Router
  ) {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, [minWordsValidator()]],
      nascimento: [null, [Validators.required, dataNascimento()]], 
      cpf: [null, [Validators.required, ValidateCPF()]],
      telefone: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(6)]],
      genero: ['outro'],
      cidade: [null, Validators.required],
      estado: [null, Validators.required],
      confirmarEmail: [null, [Validators.required, Validators.email]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    this.cadastroForm.get('telefone')?.valueChanges.subscribe(value => {
      if (value) {
        const formatted = this.formatTelefone(value);
        if (value !== formatted) {
          this.cadastroForm.get('telefone')?.setValue(formatted, { emitEvent: false });
        }
      }
    });
  }

  formatTelefone(telefone: string) {
    telefone = telefone.replace(/\D/g, '');
    if (telefone.length > 10) {
      return telefone.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (telefone.length > 6) {
      return telefone.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (telefone.length > 2) {
      return telefone.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else {
      return telefone.replace(/^(\d*)/, '($1');
    }
  }

  executar() {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value)
      const novoCadastro = this.cadastroForm.getRawValue();
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (value) => {
          console.log('Cadastro realizado com sucesso', value)
          this.router.navigate(['/login'])
        },
        error: (err) => {
          console.log('Erro ao realizar cadastro', err)
        }
      })
    } else {
      this.cadastroForm.markAllAsTouched();
    }

  }

}
