import { AddtocartComponent } from './../../components/addtocart/addtocart';
import { CartlistPage } from './../cartlist/cartlist';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Navbar } from 'ionic-angular';
import { ShoppingPage } from '../shopping/shopping';
import { TranslateService } from '@ngx-translate/core';


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

  @ViewChild(Navbar) navBar: Navbar;

  toggled: boolean = false;
  product_id: number;
  product_name: string = "";
  product: any = [];
  slides: any = [];
  product_properties: string;
  product_desc: string;

  product_review: any = 0;
  product_related: any = 0;

  already_cart: boolean = false;

  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams, private r: RemoteServiceProvider, private translate: TranslateService, private barcode: BarcodeScanner) {
    this.product_id = navParams.get('product_id');
    this.product_name = navParams.get('product_name');
    this.product_properties = "product_detail";

  }

  ionViewWillEnter() {
    this.loadProductDetail(this.product_id);
    this.loadProductReview(this.product_id);
    this.loadProductRelated(this.product_id);

    let curlang = this.translate.currentLang;
    this.product_name = this.r.splitcontent(curlang, this.product_name);


    this.navBar.backButtonClick = (e: UIEvent) => {

      console.log(this.navCtrl);
      this.r.checkcart = true
      this.navCtrl.pop();

    }


    //this.product_desc = this.r.splitcontent(curlang,this.product.description)
    /* if(this.r.getcartItem(this.product_id)){
      this.already_cart = true;
    }else{
      this.already_cart = false;
    } */
  }

  showdatacontent(product) {
    this.slides = this.product.images
    this.product_desc = this.r.splitcontent(this.translate.currentLang, this.product.description)
  }

  loadProductDetail(product_id) {
    this.r.showloading();
    this.r.getProduct(product_id).subscribe(
      data => {
        this.product = data;
        console.log("product");
        console.log(this.product);
      },
      error => { console.log('Error1111') },
      () => { this.showdatacontent(this.product); this.r.hideloading(); }
    );
  }

  loadProductReview(product_id) {

  }

  loadProductRelated(product_id) {

  }

  segmentChanged(e) {
    console.log(e);
  }

  async showQR(id) {
    console.log(id);
    let textURL: string = "http://www.playground-inseoul.com/show/product/" + id
    await this.barcode.encode(this.barcode.Encode.TEXT_TYPE, textURL);

  }

  goBack() {
    this.navCtrl.push(ShoppingPage, {}, { animate: true, direction: 'back' });
  }

  buyitem(id) {
    alert(id);
  }




}