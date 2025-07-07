import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/auth/cadastro`, user);
  }
  buscarCadastrar(token: string): Observable<User> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<User>(`${this.apiUrl}/auth/perfil`, {headers});
  }
  editarCadastro(user: User, token: string): Observable<User> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.patch<User>(`${this.apiUrl}/auth/perfil`, user, {headers});
  }
}
