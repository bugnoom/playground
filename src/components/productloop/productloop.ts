import { App } from 'ionic-angular';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { ActionSheetController,Platform, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { ProductDetailPage } from '../../pages/product-detail/product-detail';



@Component({
  selector: 'productloop',
  templateUrl: 'productloop.html'
})
export class ProductloopComponent {

  @Input('keys') keys : any;
  @Input('id') id : string;
  @Input('name') name : string;
  @Input('price') price : number;
  @Input('images') images : string;

  numberToToggle: number = 0;

  constructor(private app : App , private actionSheetCtrl : ActionSheetController, private platform : Platform, private r : RemoteServiceProvider,private navCtrl : NavController) {
    
  }

  showColor : string;
  addtoCart(product_id,event) {
   console.log(event.target.attributes["0"]);
   event.target.attributes["0"].value = "danger"
   console.log(event.target.attributes);
    if(this.numberToToggle == 0){
      this.r.badgecount += 1;
      this.numberToToggle = 1;
     

    }else{
      if(this.r.badgecount > 0 ){
        this.r.badgecount -=1;
        //this.numberToToggle = 0;
      }
    }  
}

openProduct(id){
 
 this.app.getRootNav().push(ProductDetailPage,{product_id:id,product_name:this.name},{animate: true, direction: 'forward'});
  console.log("Open Cate Id" + id)
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
