import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {


  public fg: FormGroup;

  constructor(private fb: FormBuilder, private route: Router) {

    this.fg = this.fb.group({
      'paymentType': "manaapp",
    });

  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.fg.valid) {
      let amount = this.fg.get("paymentType").value == "manaapp" ? 50 : 65;
      let param: NavigationExtras = { queryParams: { amount: amount } };
      this.route.navigate(["/payment-qr"], param);
    }
  }
}
