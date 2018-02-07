import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingPage } from '../shopping/shopping';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the CartlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cartlist',
  templateUrl: 'cartlist.html',
})
export class CartlistPage {
  toggled: boolean = false;
  plist : any;
  items : any = [];
  product_name : string;
  total : number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams,private translate : TranslateService, private r : RemoteServiceProvider) {
    this.toggled = false;
    this.plist = this.r.cartlist;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartlistPage');
    console.log(this.r.cartlist);
    this.showitems();
  }

  showitems(){
    if(this.plist.length > 0){
    
    for(let i = 0; i < this.plist.length; i++){
      this.r.showloading()
      this.r.getProduct(this.plist[i]).subscribe(
        data=>{this.items.push(data)},
        err=>{ console.log("error to get data from prodcut detail")},
        ()=>{ console.log(this.items )
          this.total += (this.items.price)
        }
      )  
       this.r.hideloading();
    }
   
    }
    
    
  }

  getproduct_name(name){
    return this.r.splitcontent(this.translate.currentLang,name)

  }

buyitem(){
  alert("go to purchase this item lists")
}

to_shopping(){
  this.navCtrl.pop()
}

removethis(id){
  this.r.moveoutcart(id);
  this.showitems();

}


}
