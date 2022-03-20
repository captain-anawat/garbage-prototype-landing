import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  public applink: string;
  public fg: FormGroup;

  constructor(private fb: FormBuilder, private route: Router, private svc: DataService) {
    this.applink = svc.applink + "/np/ntrhalk-edit";

    this.fg = this.fb.group({
      'paymentType': "manaapp",
    });

  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.fg.valid) {
      let param: NavigationExtras = { queryParams: { paymentType: this.fg.get("paymentType").value } };
      this.route.navigate(["/payment-qr"], param);
    }
  }
}
