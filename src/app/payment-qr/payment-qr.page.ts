import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-payment-qr',
  templateUrl: './payment-qr.page.html',
  styleUrls: ['./payment-qr.page.scss'],
})
export class PaymentQRPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async onSelectShare() {

    Share.canShare().then(async (it) => {

      if (it.value == true) {

        await Share.share({
          title: 'See cool stuff',
          text: 'Really awesome thing you need to see right meow',
          url: 'https://prototype-landing.azurewebsites.net/#/payment-qr',
          dialogTitle: 'Share with buddies',
        });

      }

    });

  }

}
