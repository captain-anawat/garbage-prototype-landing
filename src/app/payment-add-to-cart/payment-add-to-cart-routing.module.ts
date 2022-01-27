import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentAddToCartPage } from './payment-add-to-cart.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentAddToCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentAddToCartPageRoutingModule {}
