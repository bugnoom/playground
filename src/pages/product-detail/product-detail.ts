import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingPage } from '../shopping/shopping';

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {

  toggled : boolean = false;
  product_id : number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product_id = navParams.get('product_id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

  toggle(){
    this.toggled = this.toggled ? false : true;
 }

 searchThis(even){
  console.log(even.target.value)
}

cancelSearch(){
  this.toggled = false;
}

goBack() {
  this.navCtrl.push(ShoppingPage,{},{animate: true, direction: 'back'});
}


}
