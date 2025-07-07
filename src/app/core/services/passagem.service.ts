import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DadosBusca, Resultado } from '../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassagemService {
  apiUrl: string = environment.apiUrl;
  constructor(
    private httpClient: HttpClient
  ) { }
  getPassagens(search: DadosBusca): Observable<Resultado> {
    const params = this.converterParametro(search);
    return this.httpClient.get<Resultado>(this.apiUrl + '/passagem/search?' + params)
  }

  converterParametro (busca: DadosBusca) {
    const query = Object.entries(busca).map(([key, value]) => {
      if(!value)
        return ''
      return `${key}=${value}`
    }).join('&')
    return query
  }
}
