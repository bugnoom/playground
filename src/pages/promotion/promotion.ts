import { PromotionDetailPage } from './../promotion-detail/promotion-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PromotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promotion',
  templateUrl: 'promotion.html',
})
export class PromotionPage {

  promotion : any[] 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.promotion = [{
      promotion_id:"1",
      promotion_img : "assets/imgs/logo.png",
      promotion_title : "Promotion A"
    },
    {
      promotion_id:"2",
      promotion_img : "assets/imgs/logo.png",
      promotion_title : "Promotion B"
    },
    {
      promotion_id:"3",
      promotion_img : "assets/imgs/logo.png",
      promotion_title : "Promotion C"
    },
    {
      promotion_id:"4",
      promotion_img : "assets/imgs/logo.png",
      promotion_title : "Promotion D"
    },
    {
      promotion_id:"5",
      promotion_img : "assets/imgs/logo.png",
      promotion_title : "Promotion E"
    }]
   }

  ionViewDidLoad() {
    
  }

  openPage(id){
  let a = this.promotion.find(item =>item.promotion_id === id);
  
  this.navCtrl.push(PromotionDetailPage,a);
  }

}
