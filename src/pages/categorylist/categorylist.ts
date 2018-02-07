import { TranslateService } from '@ngx-translate/core';
import { CatemenulistPage } from './../catemenulist/catemenulist';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { ShoppingPage } from '../shopping/shopping';

@IonicPage()
@Component({
  selector: 'page-categorylist',
  templateUrl: 'categorylist.html',
})
export class CategorylistPage {

  toggled : boolean = false;
  product : any = 0;
  page: number = 1;
  grid: Array<Array<string>>;
  hasMoreData: boolean = true;
 category_id : number = 0;
 category_name : string;
 

  constructor(public navCtrl: NavController, public navParams: NavParams, private r : RemoteServiceProvider, private modalCtrl : ModalController,  private translate : TranslateService) {
    this.category_id = navParams.get('category_id');
    this.category_name = navParams.get('category_name');
  
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategorylistPage');
   /*  this.tmenu.enable(true, 'testRightmenu');
    this.tmenu.enable(false, 'main'); */
    this.getproduct(this.category_id)
  }
  

  toggle(){
    this.toggled = this.toggled ? false : true;
 }

 searchThis(even){
  console.log(even.target.value)
}

cancelSearch(){
  this.toggled = false;
}

goBack() {
    this.navCtrl.setRoot(ShoppingPage,{},{animate: true, direction: 'back'});
  }

  public getproduct(cateid){
    this.r.showloading();
    this.r.getAllProductByCategory(this.page,cateid).subscribe(
      data => {this.product = (data)},
      err=>{ console.log("Error to get Product by category" + cateid)},
      ()=>{if(this.product.length > 0){
            this.showdata()
            this.r.hideloading();
          }
      }
    )
  }

  showdata() {
  
    this.grid = Array(Math.ceil(this.product.length / 2))
    console.log(this.grid);
    let rowNum = 0;
    for (let i = 0; i < this.product.length; i += 2) {
      this.grid[rowNum] = Array(2);

      if (this.product[i]) {
        this.grid[rowNum][0] = this.product[i]
      }

      if (this.product[i + 1]) {
        this.grid[rowNum][1] = this.product[i + 1];
      }
      rowNum++;
    }
   
  }

  refreshme(id,name){
    this.navCtrl.setRoot(this.navCtrl.getActive().component,{category_id:id,category_name:name}); 
  }


  doInfinite(even) {
    // console.log("infinite Scroll");
    this.page = this.page + 1;
    setTimeout(() => {
      this.r.getAllProductByCategory(this.page,this.category_id).subscribe(
        data => {
          // console.log(data);
          if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
              this.product.push(data[i]);
            }
            this.showdata();
          } else {
            even.complete();
          }
        },
        error => console.log('Error'),
        () => {
          even.complete();
        }
      )

    }, 1000);

  }

  showmenu(){
    let menulist = this.modalCtrl.create(CatemenulistPage, { category_id: this.category_id });

    menulist.onDidDismiss(data=>{
     // this.getproduct(data.id)
     console.log(data);
    if(data){
     this.category_id = data.id;
     this.category_name = data.name;
    this.product = 0;
    this.page = 1;
     this.getproduct(data.id);
    }else{
      return;
    }
    })
    menulist.present();
  }


  
}
