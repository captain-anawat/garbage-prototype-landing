import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';
import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-payment-qr',
  templateUrl: './payment-qr.page.html',
  styleUrls: ['./payment-qr.page.scss'],
})
export class PaymentQRPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSelectDownload() {

    var element = document.getElementById('payment-qr-content');
    htmlToImage.toPng(element)
      .then(function (dataUrl) {
        download("payment-" + Math.random().toString().slice(2, 7), dataUrl);
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });

    function download(filename, data) {
      var element = document.createElement('a');
      element.setAttribute('href', data);
      element.setAttribute('download', filename);
      document.body.appendChild(element);
      element.click();
    }

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
