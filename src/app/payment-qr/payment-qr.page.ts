import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-qr',
  templateUrl: './payment-qr.page.html',
  styleUrls: ['./payment-qr.page.scss'],
})
export class PaymentQRPage implements OnInit {

  public cost: number = 50;

  constructor(private route: ActivatedRoute) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        let value = params["cost"];
        if (value) {
          this.cost = value;
        }
      });
    }
  }

  ngOnInit() {
  }

}
