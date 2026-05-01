import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cartao } from '../../models/cartao.model';

const URL_API = 'http://localhost:3000';

@Injectable()
export class ListaCartoes {
  private url_api: string = `${URL_API}/cartoes`;
  private readonly http = inject(HttpClient);

  getlistaCartoes() {
    return this.http.get<Cartao[]>(this.url_api);
  }

  getCartaoPorId(id: string) {
    return this.http.get<Cartao>(`${this.url_api}/${id}`);
  }
}
