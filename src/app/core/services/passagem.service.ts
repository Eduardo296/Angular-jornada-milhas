import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Resultado } from '../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassagemService {
  apiUrl: string = environment.apiUrl;
  constructor(
    private httpClient: HttpClient
  ) { }
  getPassagens(search: any): Observable<Resultado> {
    const params = search;
    return this.httpClient.get<Resultado>(this.apiUrl + '/passagem/search', {params})
  }
}
