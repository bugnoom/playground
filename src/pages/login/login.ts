import { UserloginProvider } from './../../providers/userlogin/userlogin';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { ShippingPage } from '../shipping/shipping';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  page : string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private r : RemoteServiceProvider,private login : UserloginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    console.log(this.navParams);
    this.page = this.navParams.get('page');
  }

  doLogin(){
    this.r.accountLogin();
    /* if(this.page == "shipping"){
      this.navCtrl.setRoot(ShippingPage);
    } */
    this.navCtrl.pop();
    
  }

}
