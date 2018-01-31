import { App } from 'ionic-angular';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { ActionSheetController,Platform, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { ProductDetailPage } from '../../pages/product-detail/product-detail';
import { TranslateService } from 'ng2-translate';


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

  numberToToggle: number = 0;
  language : string;
 

  constructor(private app : App , private actionSheetCtrl : ActionSheetController, private platform : Platform, private r : RemoteServiceProvider,private navCtrl : NavController, private translate : TranslateService) {
   
   
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

  addtoCart(product_id,event) {
    if(this.numberToToggle == 0){
      this.r.badgecount += 1;
      this.numberToToggle = 1;
      console.log("Add to cart id:"+product_id)
      this.r.addtocart(product_id);
    
    }else{
      if(this.r.badgecount > 0 ){
        this.r.badgecount -=1;
        this.numberToToggle = 0;
        console.log("move out cart id:"+product_id)
        this.r.moveoutcart(product_id);
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
