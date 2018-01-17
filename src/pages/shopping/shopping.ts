
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController,Platform } from 'ionic-angular';



/**
 * Generated class for the ShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


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

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController, public platform : Platform) {
 
    this.slides = [
      { h1: "Bontree" },
      { h1: "SkillCare" },
      { h1: "Mask" },
      { h1: "Lipstick" },
      { h1: "ApprilSkin" }
    ];

    this.categorys = [
      { id: "1", category: "Bontree" },
      { id: "2", category: "SkillCare" },
      { id: "3", category: "Mask" },
      { id: "4", category: "Lipstick" },
      { id: "5", category: "ApprilSkin" },
      { id: "6", category: "Coushion" }
    ]

    this.product = [{
      product_id: "1",
      product_name: "AAAA",
      prodcut_price: 500,
      product_discount: 450,
      product_local_price: 10,
      product_img: 'assets/imgs/logo.png'
    },
    {
      product_id: "2",
      product_name: "BBBBB",
      prodcut_price: 500,
      product_discount: 450,
      product_local_price: 10,
      product_img: 'assets/imgs/logo.png'
    },
    {
      product_id: "3",
      product_name: "CCCC",
      prodcut_price: 500,
      product_discount: 450,
      product_local_price: 10,
      product_img: 'assets/imgs/logo.png'
    },
    {
      product_id: "4",
      product_name: "DDDD",
      prodcut_price: 500,
      product_discount: 450,
      product_local_price: 10,
      product_img: 'assets/imgs/logo.png'
    },
    {
      product_id: "5",
      product_name: "FFFFF",
      prodcut_price: 500,
      product_discount: 450,
      product_local_price: 10,
      product_img: 'assets/imgs/logo.png'
    },
    {
      product_id: "6",
      product_name: "GGGGGG",
      prodcut_price: 500,
      product_discount: 450,
      product_local_price: 10,
      product_img: 'assets/imgs/logo.png'
    },
    {
      product_id: "7",
      product_name: "HHHHHH",
      prodcut_price: 500,
      product_discount: 450,
      product_local_price: 10,
      product_img: 'assets/imgs/logo.png'
    }];



    this.grid = Array(Math.ceil(this.product.length / 2)); //MATHS!
    // this.grid = Array.from(Array(Math.ceil(this.product.length / 2)).keys());
  }

  ionViewDidLoad() {
   
    console.log('Product list ' + this.product.length);
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

  //  console.log(this.grid);
  }


  openCategory(id) {
    console.log("Open Cate Id" + id)
  }

  doInfinite(even){
    console.log("infinite Scroll");
    setTimeout(() => {
      even.complete();
    }, 500);
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
