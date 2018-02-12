
import { Http, Response } from '@angular/http';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { LoadingController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';


/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {
  badgecount : number = 0;
  private url : string = "http://www.playground-inseoul.com/mobileservices/services.php";//"http://192.168.1.48/WooService/services.php";
  language : string;
  cartlist : any = [];

  constructor(private http: Http, public loadingCtrl : LoadingController,private translate : TranslateService) {
    this.language = this.translate.currentLang;
  }
   loading : any 
  

  showloading(){
  this.loading= this.loadingCtrl.create({
      content: "Loading ..."
    })
    this.loading.present();
  }

  hideloading(){
    this.loading.dismiss();
  }

  getCategories(){
    var url = this.url+"?action=getCategory";
    
    return this.http.get(url)
    //.do((res : Response) => console.log(res))
    .map((res : Response) => res.json())   
  }

  getSlideBanner(){
    var url = this.url+"?action=getSlideBanner";

    return this.http.get(url)
    .do((res:Response)=>console.log(res))
    .map((res : Response)=>res.json());
  }

  getAllProduct(page){
    var url = this.url+"?action=getAllProduct&page="+page+"&lang="+this.language;

    return this.http.get(url)
   // .do((res : Response)=> console.log(res))
    .map((res : Response)=>res.json())
  }

  getAllProductByCategory(page,cate_id){
    var url = this.url+"?action=getAllProductCategory&cate_id="+cate_id+"&page="+page+"&lang="+this.language;
    return this.http.get(url)
    .do((res:Response)=>console.log(res))
    .map((res:Response)=>res.json())
  }

  getProduct(id){
    var url = this.url+"?action=getProduct&id="+id;

    return this.http.get(url)
    //  .do((res : Response)=> console.log(res))
      .map((res : Response) => res.json())
    
  }

  addtocart(id){
    if(this.getcartItem(id)){
      this.badgecount -= 1;
      return;
    }else{
      this.cartlist.push(id);
    }
    
  }

  moveoutcart(ids){
    console.log(ids);
    var a =[]
    a.push(ids);
      var index = this.deepIndexOf(this.cartlist,ids);
      console.log("move index : "+index) 
      if(index > -1){
        this.cartlist.splice(index,1);
      }   
  }

  //function for search index of array
  deepIndexOf(arr,obj){
    return arr.findIndex(function (cur){
      return Object.keys(obj).every(function (key){
        return obj[key] === cur[key];
      });
    });
  }

  getcartItem(id){
    if(id){
      var index = this.deepIndexOf(this.cartlist,id);
      if(index > -1){
        return true;
      }else{
        return false;
      }
    }
  }

  splitcontent(curlang,content){
    let p = new RegExp("\[\:["+curlang+"]+\]");
    let _sp = content.split(p);
    let k = new RegExp("\[\:[a-zA-Z]+\]");
    if(_sp.length > 1){
      let s = _sp[1].split(k); 
      content = s[0];
    }else{
      //console.log(_sp);
      content = _sp[0];
    }
    return content;
  }

}