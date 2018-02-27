import { Storage } from '@ionic/storage';
import { LoginPage } from './../login/login';
import { UserloginProvider } from './../../providers/userlogin/userlogin';
import { ShippingPage } from './../shipping/shipping';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, Events } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the CartlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cartlist',
  templateUrl: 'cartlist.html',
})
export class CartlistPage {
  @ViewChild(Navbar) navBar: Navbar;

  toggled: boolean = false;
  plist: any;
  items: any = [];
  product_name: string;
  total: number = 0;
  shoppong: any;


  constructor(private login : UserloginProvider, public navCtrl: NavController, public navParams: NavParams, private translate: TranslateService, private r: RemoteServiceProvider, public events : Events, private storageCtrl : Storage) {
    this.toggled = false;
    this.plist = this.r.cartlist;
   // this.login.checklogin();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartlistPage');
    console.log(this.r.cartlist);
    this.items = this.r.cartlist;
    this.sumproduct_price();
    this.navBar.backButtonClick = (e: UIEvent) => {
      this.events.publish("reloadpage");
      this.navCtrl.pop();

    }
  }

  sumproduct_price() {
    this.total = 0;
    for (let i = 0; i < this.plist.length; i++) {
      let ans = this.plist[i].sale_price * this.plist[i].count;
      this.total += ans;
    }
  }

  getproduct_name(name) {
    return this.r.splitcontent(this.translate.currentLang, name)
  }

  buyitem() {
    //open for customer add shipping detail page 
    // send tatal price via parameter
  this.storageCtrl.get('logedin').then(
    (data) => {
      if(data == '0'){
        this.navCtrl.push(LoginPage,{prepage : "shipping"},{ animate: true, direction: 'forward' });
      }else{
        this.navCtrl.push(ShippingPage,{},{ animate: true, direction: 'forward' })
      }
    }
  )
    
  
  }

  to_shopping() {
    this.navCtrl.pop()
  }

  removethis(id) {
    this.r.moveoutcart(id);
    this.sumproduct_price();
  }


}
