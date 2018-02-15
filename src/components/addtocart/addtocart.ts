import { ShowvariationPage } from './../../pages/showvariation/showvariation';
import { NavController, ModalController, NavParams,  ToastController } from 'ionic-angular';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the AddtocartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'addtocart',
  templateUrl: 'addtocart.html'
})
export class AddtocartComponent {

  text: string;
  numberToToggle: number = 0;
  language: string;

  @Input('data') data: any = [];
  @Input('variation') variations: any = [];
  @Input('buttontype') buttontype : string;

  constructor(private r: RemoteServiceProvider, public navParam: NavParams, private translate: TranslateService, private NavCtrl: NavController, private modalCtrl: ModalController, private toastCtrl : ToastController) {
    console.log("Constructor event on addtocart component")
    
    
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    console.log(this.data);
    console.log("in stock is : "+this.data.in_stock)
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("Check duplicate data on Init"+this.data.id)
    console.log(this.r.getcartItem(this.data.id.toString()))
    if (this.r.getcartItem(this.data.id.toString())) {
      this.numberToToggle = 1;
      console.log("do true and numberTotogle = "+ this.numberToToggle)
    }else{
      this.numberToToggle = 0;
    }
    this.language = this.translate.currentLang;

    console.log("Product Name : " + this.data.name);
    console.log(this.variations);
    console.log("buttontype is : "+this.buttontype)

  }

   addtoCart(data) {
    let img : any = (data.images.length > 0)? data.images[0].src : data.images;
    
   console.log('count image :'+ data.images.length);

    let product = {
      'id': data.id.toString(),
      'name': data.name,
      'price': data.price,
      'regular_price': data.regular_price,
      'price_html': data.price_html,
      'sale_price': data.sale_price,
      'on_sale': data.on_sale,
      'images': img
    }

  //  if (this.numberToToggle == 0) {
      //check variations if have a variation show a modal for select a variation
      if (this.variations.length > 0) {
        let variationList = this.modalCtrl.create(ShowvariationPage, { product: this.variations });
        variationList.onDidDismiss(data => {
          //affter click on viriation list or cancel
          console.log("return from modal =" + data)
          if (data) {
            this.moveincart(data.productdata);
          }
        });
        variationList.present();

      } else {
        this.moveincart(product); //add to cart
      }
   // } else {
   //   if (this.r.badgecount > 0) {
   //    this.removecart(product); // remove out cart
   //   }
   // }
  }

  moveincart(data){
    this.r.badgecount += 1;
    this.numberToToggle = 1;
    data.count = 1;
    console.log("Add to cart id:" + data.id)
    this.r.addtocart(data);
    
  }

  removecart(data){
    this.r.badgecount -= 1;
    this.numberToToggle = 0;
    data.count = 1;
    console.log("move out cart id:" + data.id)
    this.r.moveoutcart(data);
  }

}
