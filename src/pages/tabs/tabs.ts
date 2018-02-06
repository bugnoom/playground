import { ShowcategoryPage } from './../showcategory/showcategory';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
/* import { CategorylistPage } from './../categorylist/categorylist'; */
import { LoginPage } from './../login/login';
import { CartlistPage } from './../cartlist/cartlist';
import { PromotionPage } from './../promotion/promotion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingPage } from '../shopping/shopping';
import { TranslateService } from '@ngx-translate/core';


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
  Category : any = ShowcategoryPage;
  myIndex : number;
  
  constructor(public navCtrl: NavController,public translate: TranslateService, public navParams: NavParams,public service : RemoteServiceProvider) {
    this.myIndex = navParams.data.tabIndex || 0;
    
  }
  countCartItem(){
    return this.service.badgecount
  }

}
