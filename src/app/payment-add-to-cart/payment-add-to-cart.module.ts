import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentAddToCartPageRoutingModule } from './payment-add-to-cart-routing.module';

import { PaymentAddToCartPage } from './payment-add-to-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentAddToCartPageRoutingModule
  ],
  declarations: [PaymentAddToCartPage]
})
export class PaymentAddToCartPageModule {}
