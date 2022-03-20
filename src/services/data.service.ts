import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _applink: string = "mana://go.manal.ink";
  public get applink(): string {
    return this._applink;
  }

  private _shareUrl: string = "https://prototype-landing-release.azurewebsites.net";
  public get shareUrl(): string {
    return this._shareUrl;
  }

  constructor() { }
}
