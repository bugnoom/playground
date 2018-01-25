import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';

import { CategorylistPage } from './../categorylist/categorylist';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController, Platform,LoadingController } from 'ionic-angular';
import { ProductDetailPage } from '../product-detail/product-detail';



 
@IonicPage() 

@Component({
  selector: 'page-shopping',
  templateUrl: 'shopping.html',
})



export class ShoppingPage {

  slides: any[];
  categorys: any[];
  grid: Array<Array<string>>;
  product: any[];
  numberToToggle: number = 0;
  toggled: boolean = false;
  page : number = 1;


  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public platform: Platform,private r : RemoteServiceProvider,loading : LoadingController) {
     
    this.getCategory();

    this.getSlider();

    this.getProduct(this.page);
  
    this.toggled = false;
   // this.grid = Array(Math.ceil(this.product.length / 2)); //MATHS!
    // this.grid = Array.from(Array(Math.ceil(this.product.length / 2)).keys());
  }

  showdata(){
    this.grid = Array(Math.ceil(this.product.length / 2))
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

  getProduct(p){
    this.r.getAllProduct(p).subscribe(
      data=>this.product = (data),
      error=>console.log('Error'),
      ()=> this.showdata()
    );
    console.log('Product list ' + this.product);
    /* let rowNum = 0;
    for (let i = 0; i < this.product.length; i += 2) {
      this.grid[rowNum] = Array(2);

      if (this.product[i]) {
        this.grid[rowNum][0] = this.product[i]
      }

      if (this.product[i + 1]) {
        this.grid[rowNum][1] = this.product[i + 1];
      }
      rowNum++;
    } */

    /* this.product = [{
      product_id: "1",
      product_name: "AAAA",
      prodcut_price: 500,
      product_discount: 450,
      product_local_price: 10,
      product_img: 'assets/imgs/logo.png',
      icon_cart : 'cart-outline'
    },
    {
      product_id: "2",
      product_name: "BBBBB",
      prodcut_price: 500,
      product_discount: 450,
      product_local_price: 10,
      product_img: 'assets/imgs/logo.png',
      icon_cart : 'cart-outline'
    },
    {
      product_id: "3",
      product_name: "CCCC",
      prodcut_price: 500,
      product_discount: 450,
      product_local_price: 10,
      product_img: 'assets/imgs/logo.png',
      icon_cart : 'cart-outline'
    },
    {
      product_id: "4",
      product_name: "DDDD",
      prodcut_price: 500,
      product_discount: 450,
      product_local_price: 10,
      product_img: 'assets/imgs/logo.png',
      icon_cart : 'cart-outline'
    },
    {
      product_id: "5",
      product_name: "FFFFF",
      prodcut_price: 500,
      product_discount: 450,
      product_local_price: 10,
      product_img: 'assets/imgs/logo.png',
      icon_cart : 'cart-outline'
    },
    {
      product_id: "6",
      product_name: "GGGGGG",
      prodcut_price: 500,
      product_discount: 450,
      product_local_price: 10,
      product_img: 'assets/imgs/logo.png',
      icon_cart : 'cart-outline'
    },
    {
      product_id: "7",
      product_name: "HHHHHH",
      prodcut_price: 500,
      product_discount: 450,
      product_local_price: 10,
      product_img: 'assets/imgs/logo.png',
      icon_cart : 'cart-outline'
    }]; */
  }

  getSlider(){
    this.slides = [
      { h1: "Bontree" },
      { h1: "SkillCare" },
      { h1: "Mask" },
      { h1: "Lipstick" },
      { h1: "ApprilSkin" }
    ];
  }

  

  getCategory(){
      this.r.getCategories().subscribe(data=>this.categorys = data);

   // this.r.getCategories().subscribe(data=>console.log(data)); //console.log(this.categorys);
   /* this.categorys = [
      { id: "1", category: "Bontree" },
      { id: "2", category: "SkillCare" },
      { id: "3", category: "Mask" },
      { id: "4", category: "Lipstick" },
      { id: "5", category: "ApprilSkin" },
      { id: "6", category: "Coushion" }
    ]*/
  }

  ionViewDidLoad() {
   
    //  console.log(this.grid);
  }

  toggle(){
    this.toggled = this.toggled ? false : true;
 }

  openCategory(id) {
    this.navCtrl.setRoot(CategorylistPage,{category_id:id},{animate: true, direction: 'forward'});
    console.log("Open Cate Id" + id)
  }

  openProduct(id){
    this.navCtrl.push(ProductDetailPage,{product_id:id},{animate: true, direction: 'forward'});
    console.log("Open Cate Id" + id)
  }

  doInfinite(even) {
    console.log("infinite Scroll");
    this.page = this.page+1;
    setTimeout(() => {
      this.r.getAllProduct(this.page).subscribe(
        data=>{
          for(let i =0; i < data.length; i++){
            this.product.push(data[i]);}
        },
        error=>console.log('Error'),
        ()=>{even.complete();
            this.showdata();    
        }
      )
     
    }, 1000);
  }

  searchThis(even){
    console.log(even.target.value)
  }

  cancelSearch(){
    this.toggled = false;
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
