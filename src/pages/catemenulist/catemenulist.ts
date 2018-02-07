import { TranslateService } from '@ngx-translate/core';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

/**
 * Generated class for the CatemenulistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catemenulist',
  templateUrl: 'catemenulist.html',
})
export class CatemenulistPage {

  categorys : any = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private r : RemoteServiceProvider, public viewCtrl : ViewController, private translate : TranslateService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatemenulistPage');
    this.getcategory();
  }

  getcategory(){
    this.r.getCategories().subscribe(
     data =>{this.categorys = data},
     err=>{console.log("Error get Category data")},
     ()=>{}
   )
 }

 openPagecategory(id,name){
  //this.navCtrl.setRoot(this.navCtrl.getActive.module,{category_id:id,category_name:name},{animate: true, direction: 'back'});
 //CategorylistPage.
 //this.navCtrl.setRoot(this.navCtrl.getActive().component,{category_id:id,category_name:name});
 this.viewCtrl.dismiss(
        {'id' : id, 'name' : name}
   
 )

}

dismis(){
  this.viewCtrl.dismiss();
}


}
