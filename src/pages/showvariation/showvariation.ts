import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

/**
 * Generated class for the ShowvariationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showvariation',
  templateUrl: 'showvariation.html',
})
export class ShowvariationPage {
  
  data : any[];
  product : any = [];


  constructor(public navCtrl: NavController,public viewCtrl : ViewController, public navParams: NavParams, private r : RemoteServiceProvider, private translate : TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowvariationPage');
    this.data = this.navParams.get('product');
    //console.log(this.data.length);
    this.getitems(this.data);
  }

  getitems(data){
   // console.log("NUMBER = "+data.length);
    for(let i = 0; i < data.length; i++){
      this.r.getProduct(data[i]).subscribe(
        productdata => {
          this.product.push(productdata);
          console.log(this.product)
        },
        err =>{console.log(err);},
        () => {}
      )
    }
    
  }

  dismis(){
    this.viewCtrl.dismiss();
  }

}
