import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Navigation } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, 
    CommonModule,
    MatButtonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  user$: ReturnType<UserService['retornarUser']>;

  constructor(private userService: UserService, private router: Router) {
    this.user$ = this.userService.retornarUser();
  }

  deslogar() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
