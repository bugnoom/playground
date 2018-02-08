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

  @ViewChild(Navbar) navBar : Navbar;

  toggled: boolean = false;
  product_id: number;
  product_name: string = "";
  product: any = 0;
  slides: any[];
  product_properties: string;
  product_desc : string;

  product_review: any = 0;
  product_related: any = 0;

 already_cart : boolean = false;

  constructor(private app : App, public navCtrl: NavController, public navParams: NavParams, private r: RemoteServiceProvider, private translate : TranslateService, private barcode : BarcodeScanner) {
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
    
    let curlang = this.translate.currentLang ;
    this.product_name = this.r.splitcontent(curlang,this.product_name);
    console.log(this.product_desc);

    this.navBar.backButtonClick = (e:UIEvent)=>{
      // todo something
    
      this.navCtrl.pop();
     }
    //this.product_desc = this.r.splitcontent(curlang,this.product.description)
       

  }

  showdatacontent(product){
    this.slides = this.product.images
    this.product_desc = this.r.splitcontent(this.translate.currentLang,this.product.description)
  }

  loadProductDetail(product_id) {
    this.r.getProduct(product_id).subscribe(
      data => this.product = (data),
      error => console.log('Error1111'),
      () => this.showdatacontent(this.product)
    );
  }

  loadProductReview(product_id){

  }

  loadProductRelated(product_id){

  }

  segmentChanged(e) {
    console.log(e);
  }

  async showQR(id){
    console.log(id);
    let textURL : string = "http://www.playground-inseoul.com/show/product/"+id
    await this.barcode.encode(this.barcode.Encode.TEXT_TYPE,textURL);

  }

  goBack() {
    this.navCtrl.push(ShoppingPage, {}, { animate: true, direction: 'back' });
  }

  buyitem(id){
    alert(id);
  }

  addtocart(id,name,on_sale,price,regular_price,price_html,sale_price,images){
    let product = {
      'id' : id,
      'name' : name,
      'price' : price,
      'regular_price' : regular_price,
      'price_html' : price_html,
      'sale_price' : sale_price,
      'on_sale' : on_sale,
      'images' : images
  }
  console.log(product);
    this.r.addtocart(product);
    this.already_cart = true;
  }

  opencart(){
    this.app.getRootNav().push(CartlistPage,{},{animate: true, direction: 'forward'});
  }



}