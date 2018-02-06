import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingPage } from '../shopping/shopping';
import { MenuController } from 'ionic-angular/components/app/menu-controller';


@IonicPage()
@Component({
  selector: 'page-categorylist',
  templateUrl: 'categorylist.html',
})
export class CategorylistPage {

  toggled : boolean = false;
  product : any = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tmenu : MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategorylistPage');
   /*  this.tmenu.enable(true, 'testRightmenu');
    this.tmenu.enable(false, 'main'); */
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
