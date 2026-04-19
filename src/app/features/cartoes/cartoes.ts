import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ListaCartoes } from '../../core/services/lista-cartoes/lista-cartoes';
import { Cartao } from '@core/models/cartao.model';

@Component({
    selector: 'app-cartoes',
    templateUrl: './cartoes.html',
    styleUrls: ['./cartoes.scss']
})
export class Cartoes implements OnInit {

  private readonly cartoesService = inject(ListaCartoes);

  private loadingValue = true;
  private cartoesValue: Cartao[] = [];

  loading(): boolean {
    return this.loadingValue;
  }

  cartoes(): Cartao[] {
    return this.cartoesValue;
  }

  ngOnInit(): void {
    this.listaCartoes();
  }

  listaCartoes(): void {
    this.cartoesService.getlistaCartoes().subscribe({
      next: (cartoes) => {
        this.cartoesValue = cartoes;
        this.loadingValue = false;
      },
      error: (error) => {
        console.error('Error fetching cartoes:', error);
        this.loadingValue = false;
      },
    });
  }
}
