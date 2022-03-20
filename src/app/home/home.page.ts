import { Component } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public applink: string;
  
  constructor(private svc: DataService) {
    this.applink = svc.applink + "/np/ntrhalk-nomember";
  }

}
