import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Storage } from '@ionic/storage';
import { RemoteServiceProvider } from '../remote-service/remote-service';


/*
  Generated class for the UserloginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserloginProvider {

  logedin: boolean = false;
  header: any = { 'Content-Type': 'application/json' }


  constructor(public http: HttpClient, public storage: Storage, public r: RemoteServiceProvider) {
    console.log('Hello UserloginProvider Provider');
  }

  //#### ======= User function API ===#
  registerAccount(accountdata) {
    let data = JSON.stringify(accountdata);
    let url = this.r.url + "?action=registerAccount";
    this.http.post(url, data).subscribe(
      ((data: Response) => console.log(data['_body'])),
      err => console.log("errlr", err),
      () => console.log('finally show this', data['_body'])
    )
  }

  checkfacebooklogin(fb_id) {

  }

  getCustomer(user) {

  }

  checklogin(user) {
    let url = "";
    if (user.fb == 0) {
      url = this.r.url + "?action=checkLogin";
    } else {
      url = this.r.url + "?action=checkFBLogin";
    }
    return this.http.post(url, user, this.header)
  }

}
