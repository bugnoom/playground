import { App } from 'ionic-angular';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { ActionSheetController,Platform } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { ProductDetailPage } from '../../pages/product-detail/product-detail';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'productloop',
  templateUrl: 'productloop.html'
})
export class ProductloopComponent {

  @Input('keys') keys : any;
  @Input('id') id : string;
  @Input('name') name : string;
  @Input('price') price : number;
  @Input('sale-price') sale_price : number = 0;
  @Input('regular-price') regular_price : number;
  @Input('priceHtml') priceHtml : string;
  @Input('images') images : string;
  @Input('on_sale') on_sale : any;

  numberToToggle: number = 0;
  language : string;
 
  constructor(private app : App , private actionSheetCtrl : ActionSheetController, private platform : Platform, private r : RemoteServiceProvider, private translate : TranslateService) {
   
   
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   if(this.r.getcartItem(this.id)){
    this.numberToToggle = 1;
   }
   this.language  = this.translate.currentLang;
   this.name = this.r.splitcontent(this.language,this.name);
   
  }

 
  getFavoriteItem(){
    
  }

  addtoCart(id,name,on_sale,price,regular_price,price_html,sale_price,images) {
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
    if(this.numberToToggle == 0){
      this.r.badgecount += 1;
      this.numberToToggle = 1;
      console.log("Add to cart id:"+id)
     
      this.r.addtocart(product);
    
    }else{
      if(this.r.badgecount > 0 ){
        this.r.badgecount -=1;
        this.numberToToggle = 0;
        console.log("move out cart id:"+id)
        this.r.moveoutcart(product);
      }
    }  
    console.log(this.r.cartlist);
}

openProduct(id){
 this.app.getRootNav().push(ProductDetailPage,{product_id:id,product_name:this.name},{animate: true, direction: 'forward'});
}

  addtoFavorite(product_id) {

  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Share this Products to',
      buttons: [
        {
          text: 'Facebook',
          role: 'facebook',
          icon: !this.platform.is('ios') ? 'logo-facebook' : null,
          handler: () => {
            console.log('Facebook clicked');
          }
        },
        {
          text: 'Google+',
          icon: !this.platform.is('ios') ? 'logo-googleplus' : null,
          handler: () => {
            console.log('Google+ clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

}
