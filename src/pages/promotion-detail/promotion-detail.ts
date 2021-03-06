import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PromotionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promotion-detail',
  templateUrl: 'promotion-detail.html',
})
export class PromotionDetailPage {
public promotion;
now : string = new Date().toISOString();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.promotion = navParams.data
  }

  ionViewDidLoad() {
    console.log(this.promotion);
  }

  goBack() {
    console.log("popping");
    this.navCtrl.pop();
  }
}
