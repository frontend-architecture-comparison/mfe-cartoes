import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { Cartoes } from './cartoes';
import { CardCartao } from './components/card-cartao/card-cartao';
import { LoadingComponent } from '../../shared/components/loading/loading';
import { ListaCartoes } from '../../core/services/lista-cartoes/lista-cartoes';

const routes: Routes = [
  {
    path: '',
    component: Cartoes,
  },
];

@NgModule({
  declarations: [Cartoes, CardCartao, LoadingComponent],
  imports: [
    CommonModule, 
    HttpClientModule, 
    RouterModule.forChild(routes)
  ],
  providers: [ListaCartoes],
})
export class CartoesModule {}
