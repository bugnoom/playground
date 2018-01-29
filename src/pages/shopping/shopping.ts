import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';

import { CategorylistPage } from './../categorylist/categorylist';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDetailPage } from '../product-detail/product-detail';


 
@IonicPage() 
@Component({
  selector: 'page-shopping',
  templateUrl: 'shopping.html',
})

export class ShoppingPage {

  slides: any[];
  categorys: any = 0;
  grid: Array<Array<string>>;
  product: any = 0;
  toggled: boolean = false;
  page : number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, private r : RemoteServiceProvider) {
     
    this.getCategory();

    this.getSlider();

    this.getAllProduct(this.page);
  
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

  getAllProduct(p){
    this.r.getAllProduct(p).subscribe(
      data=>this.product = (data),
      error=>console.log('Error22'+error),
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
  }

  ionViewDidLoad() {
   
    //  console.log(this.grid);
  }

  toggle(){
    this.toggled = this.toggled ? false : true;
 }

  openCategory(id) {
    this.navCtrl.push(CategorylistPage,{category_id:id},{animate: true, direction: 'forward'});
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

 


}
