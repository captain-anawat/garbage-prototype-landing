import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'payment-qr',
    loadChildren: () => import('./payment-qr/payment-qr.module').then( m => m.PaymentQRPageModule)
  },
  {
    path: 'payment-result',
    loadChildren: () => import('./payment-result/payment-result.module').then( m => m.PaymentResultPageModule)
  },  {
    path: 'payment-add-to-cart',
    loadChildren: () => import('./payment-add-to-cart/payment-add-to-cart.module').then( m => m.PaymentAddToCartPageModule)
  },
  {
    path: 'payment-confirm',
    loadChildren: () => import('./payment-confirm/payment-confirm.module').then( m => m.PaymentConfirmPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
