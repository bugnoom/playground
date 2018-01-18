import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingPage } from '../shopping/shopping';

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
  toggled: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.toggled = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartlistPage');
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
    this.navCtrl.setRoot(ShoppingPage,{},{animate: true, direction: 'back'});
  }
}
