import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingPage } from '../shopping/shopping';

/**
 * Generated class for the CategorylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorylist',
  templateUrl: 'categorylist.html',
})
export class CategorylistPage {

  toggled : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategorylistPage');
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
