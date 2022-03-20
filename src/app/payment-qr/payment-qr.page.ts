import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Share } from '@capacitor/share';
import * as htmlToImage from 'html-to-image';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-payment-qr',
  templateUrl: './payment-qr.page.html',
  styleUrls: ['./payment-qr.page.scss'],
})
export class PaymentQRPage implements OnInit {

  public applink: string;
  public data: any = { paymentType: "", paymentQRUrl: "", amount: 0 };

  constructor(private route: ActivatedRoute, private svc: DataService) {
    this.applink = svc.applink + "/np/ntrhalk-295788714393704";

    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        let paymentType = params["paymentType"];
        if (paymentType) {

          this.data.paymentType = paymentType;
          switch (this.data.paymentType) {
            case "manaapp":
              this.data.paymentQRUrl = "https://manadevmaster.blob.core.windows.net/images/url.png";
              this.data.amount = 50;
              break;
            case "promptpay":
              this.data.paymentQRUrl = "https://manadevmaster.blob.core.windows.net/ppayqr/01b595c7-2181-4708-b405-4c99e82bf76a.png";
              this.data.amount = 65;
              break;
            default:
              break;
          }
        }
      });
    }
  }

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
          url: `${this.svc.shareUrl}/#/payment-qr?paymentType=${this.data.paymentType}`,
          dialogTitle: 'Share with buddies',
        });

      }

    });

  }

}
