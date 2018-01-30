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

  toggled: boolean = false;
  product_id: number;
  product_name: string = "";
  product: any = 0;
  slides: any[];
  product_properties: string;

  product_review: any = 0;
  product_related: any = 0;

 already_cart : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private r: RemoteServiceProvider) {
    this.product_id = navParams.get('product_id');
    this.product_name = navParams.get('product_name');
    this.product_properties = "product_detail";

    if(this.r.getcartItem(this.product_id)){
      this.already_cart = true;
    }else{
      this.already_cart = false;
    }

  }

  ionViewDidLoad() {
    this.loadProductDetail(this.product_id);
    this.loadProductReview(this.product_id);
    this.loadProductRelated(this.product_id);
  }

  loadProductDetail(product_id) {
    this.r.getProduct(product_id).subscribe(
      data => this.product = (data),
      error => console.log('Error1111'),
      () => this.slides = this.product.images
    );
  }

  loadProductReview(product_id){

  }

  loadProductRelated(product_id){

  }

  segmentChanged(e) {
    console.log(e);
  }

  goBack() {
    this.navCtrl.push(ShoppingPage, {}, { animate: true, direction: 'back' });
  }

  buyitem(id){
    alert(id);
  }

  addtocart(id){
    this.r.addtocart(id);
    this.already_cart = true;
  }

}
