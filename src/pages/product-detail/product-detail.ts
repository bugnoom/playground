import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
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
  product_name : string = "";
  product : any = 0;
  slides : any[];
  product_properties : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private r : RemoteServiceProvider) {
    this.product_id = navParams.get('product_id');
    this.product_name = navParams.get('product_name');
    this.r.getProduct(this.product_id).subscribe(
      data=>this.product = (data),
      error=>console.log('Error1111'),
      ()=>this.slides = this.product.images
    );

    this.product_properties = "product_detail";
    
    
  }

  ionViewDidLoad() {
       
  }

  segmentChanged(e){
    console.log(e);
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
