import { Events } from 'ionic-angular';
import { Http, Response } from '@angular/http';
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


  constructor(public http: Http, public storageCtrl: Storage, public r: RemoteServiceProvider,private events : Events) {
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

  addtostorage(data,fb){
    if(fb == 0){
      this.storageCtrl.set('id',data['id'])
      this.storageCtrl.set('pic',data['avatar_url'])
      this.storageCtrl.set('logedin','1');
      this.storageCtrl.set('fullname',data['first_name']+" "+data['last_name']);
    }else{
      this.storageCtrl.set('id',data['id'])
      this.storageCtrl.set('logedin','1');
    this.storageCtrl.set('pic',data['avatar_url'])
    this.storageCtrl.set('fullname',data['fullname'])
    }
    this.events.publish("checklogin");
    
  }


  checklogin(user) {
    let url = "";
    if (user.fb == 0) {
      url = this.r.url + "?action=checkLogin";
      this.header = "";
    } else {
      url = this.r.url + "?action=checkFBLogin";
    }
    return this.http.post(url, user)
    .map((res: Response) => res.json())
  }

  

}
