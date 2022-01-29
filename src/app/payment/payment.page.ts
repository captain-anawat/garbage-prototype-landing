import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  private paymentMethod: string = "/payment-qr";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelectManaApp() { this.paymentMethod = "/payment-qr"; }
  onSelectPromptPay() { this.paymentMethod = "/payment-confirm"; }

  onSubmit() {
    let param: NavigationExtras = { queryParams: { cost: "50" } };
    this.router.navigate([this.paymentMethod], param);
  }
}
