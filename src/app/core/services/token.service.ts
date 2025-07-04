import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && !!window.localStorage;
  }

  salvarToken(token: string) {
    if (this.isBrowser()) {
      localStorage.setItem(KEY, token);
    }
  }

  excluirToken() {
    if (this.isBrowser()) {
      localStorage.removeItem(KEY)
    }
  }

  retornarToken() {
    if (this.isBrowser()) {
      return localStorage.getItem(KEY) ?? ''
    }
    return '';
  }

  possuiToken() {
    return !!this.retornarToken();
  }
}