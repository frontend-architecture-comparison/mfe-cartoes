import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Cartao } from '@core/models/cartao.model';

@Component({
    selector: 'app-card-cartao',
    templateUrl: './card-cartao.html',
    styleUrls: ['./card-cartao.scss']
})
export class CardCartao {
  private readonly router = inject(Router);

  private cartaoValue!: Cartao;
  modalAberto = false;

  @Input()
  set cartaoData(cartao: Cartao) {
    this.cartaoValue = cartao;
  }

  getCartao(): Cartao {
    return this.cartaoValue;
  }

  redirectToCarrinho(): void {
    this.router.navigate(['/carrinho', this.cartaoValue.id]);
  }

  abrirModal(): void {
    this.modalAberto = true;
  }

  fecharModal(): void {
    this.modalAberto = false;
  }

  selectCartao(): void {
    this.irParaCarrinho();
  }

  irParaCarrinho(): void {
    this.fecharModal();
    this.router.navigate(['/carrinho', this.cartaoValue.id]);
  }
}
