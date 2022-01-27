import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'จำนวนเดือน',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'รายเดือน',
        icon: 'logo-medium',
        id: 'payment-method-per-month',
      }, {
        text: 'รายปี',
        icon: 'logo-hackernews',
        id: 'payment-method-per-year',
      }, {
        text: 'ยกเลิก',
        icon: 'close',
      }]
    });
    await actionSheet.present();
  }

}
