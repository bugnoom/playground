import { Events } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Storage } from '@ionic/storage';
import { RemoteServiceProvider } from '../remote-service/remote-service';
import { TranslateService } from '@ngx-translate/core';


/*
  Generated class for the UserloginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserloginProvider {

  logedin: boolean = false;
  header: any = { 'Content-Type': 'application/json' }
  logintext: string;


  constructor(public http: Http, public storageCtrl: Storage, public r: RemoteServiceProvider,private events : Events, private translate : TranslateService) {
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

  logintextCtrl(){
    this.storageCtrl.get('logedin').then((data)=>{
      if(data =='1'){
        this.logintext = this.translate.instant('logout');
      }else{
        this.logintext = this.translate.instant('login_txt');
      }
    })
  }

  checkfacebooklogin(fb_id) {

  }

  getCustomer(user) {

  }

  addtostorage(data,fb){
    this.events.publish("checklogin:changed");
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
