import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-payment-confirm',
  templateUrl: './payment-confirm.page.html',
  styleUrls: ['./payment-confirm.page.scss'],
})
export class PaymentConfirmPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    let param: NavigationExtras = { queryParams: { cost: "65" } };
    this.router.navigate(['/payment-qr'], param);
  }

}
