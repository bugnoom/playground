import { CartlistPage } from './../cartlist/cartlist';
import { PromotionPage } from './../promotion/promotion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingPage } from '../shopping/shopping';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  Shopping : any = ShoppingPage;
  Promotion : any = PromotionPage;
  Cartlist : any = CartlistPage;
  Profile : any = ProfilePage;
  myIndex : number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  

}
