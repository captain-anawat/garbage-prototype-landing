import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentQRPage } from './payment-qr.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentQRPageRoutingModule {}
