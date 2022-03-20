import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-payment-add-to-cart',
  templateUrl: './payment-add-to-cart.page.html',
  styleUrls: ['./payment-add-to-cart.page.scss'],
})
export class PaymentAddToCartPage implements OnInit {

  public applink: string;
  
  constructor(private svc: DataService) {
    this.applink = svc.applink + "/np/ntrhalk-nomember";
  }

  ngOnInit() {
  }

}
