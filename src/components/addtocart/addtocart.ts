import { ShowvariationPage } from './../../pages/showvariation/showvariation';
import { NavController, ModalController, NavParams } from 'ionic-angular';
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
  language : string;

  @Input('data') data : any[];
  @Input('variation') variations : any[];

  constructor(private r : RemoteServiceProvider,public navParam : NavParams, private translate : TranslateService,private NavCtrl : NavController,private modalCtrl : ModalController) {
    console.log('Hello AddtocartComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   if(this.r.getcartItem(this.data.id)){
    this.numberToToggle = 1;
   }
   this.language  = this.translate.currentLang;
   
   console.log("Product Name : "+this.data.name);
   console.log(this.variations);
   
  }

  addtoCart(data) {
    let product = [];
//check variations if have a variation show a modal for select a variation
if(this.variations.length > 0){
  //show a modal
  let menulist = this.modalCtrl.create("ShowvariationPage", { product : this.variations });

    menulist.onDidDismiss(data=>{
     // this.getproduct(data.id)
     console.log(data);
    
    })
    menulist.present();

}

//and add to cart list
this.additemtocart(product);

    
    console.log(this.r.cartlist);
}

  additemtocart(data){
    let product = {
      'id' : data.id,
      'name' : data.name,
      'price' : data.price,
      'regular_price' : data.regular_price,
      'price_html' : data.price_html,
      'sale_price' : data.sale_price,
      'on_sale' : data.on_sale,
      'images' : data.images
  }
    if(this.numberToToggle == 0){
      this.r.badgecount += 1;
      this.numberToToggle = 1;
      console.log("Add to cart id:"+data.id)
     
      this.r.addtocart(product);
    
    }else{
      if(this.r.badgecount > 0 ){
        this.r.badgecount -=1;
        this.numberToToggle = 0;
        console.log("move out cart id:"+data.id)
        this.r.moveoutcart(product);
      }
    }  
  }
}
