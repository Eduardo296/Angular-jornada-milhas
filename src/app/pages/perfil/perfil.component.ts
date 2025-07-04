import { Component } from '@angular/core';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Component({
  selector: 'app-perfil',
  imports: [
    CadastroComponent
  ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
  titulo = 'Olá!'
  textoButton = 'ATUALIZAR'
  perfilComponent = true
}
