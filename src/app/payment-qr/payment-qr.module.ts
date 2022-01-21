import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentQRPageRoutingModule } from './payment-qr-routing.module';

import { PaymentQRPage } from './payment-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentQRPageRoutingModule
  ],
  declarations: [PaymentQRPage]
})
export class PaymentQRPageModule {}
