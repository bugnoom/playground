import { CategorylistPage } from './../categorylist/categorylist';
import { LoginPage } from './../login/login';
import { CartlistPage } from './../cartlist/cartlist';
import { PromotionPage } from './../promotion/promotion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingPage } from '../shopping/shopping';
import { ServiceProvider } from '../../providers/service/service';


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
  Profile : any = LoginPage;
  Category : any = CategorylistPage;
  myIndex : number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public service : ServiceProvider) {
    this.myIndex = navParams.data.tabIndex || 0;
    
  }
  countCartItem(){
    return this.service.badgecount
  }

}
