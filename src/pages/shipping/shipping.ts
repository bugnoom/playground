import { LoginPage } from './../login/login';
import { UserloginProvider } from './../../providers/userlogin/userlogin';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ShippingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shipping',
  templateUrl: 'shipping.html',
})
export class ShippingPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private login : UserloginProvider) {
  }

  ionViewDidLoad() { 
   
    console.log('ionViewDidLoad ShippingPage');
  }

}
