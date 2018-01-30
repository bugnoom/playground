import { Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { LoadingController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';


/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {
  badgecount : number = 0;
  private url : string = "http://www.kocomeishop.com/mobileservices/services.php";//"http://192.168.1.48/WooService/services.php";
  language : string;
  cartlist : any = [];

  constructor(private http: Http, public loadingCtrl : LoadingController,private translate : TranslateService) {
    this.language = translate.currentLang;
  }

  loading : any = this.loadingCtrl.create({
    content: "Loading ..."
  })

  showloading(){
    this.loading.present();
  }

  hideloading(){
    this.loading.dismiss();
  }

  getCategories(){
    var url = this.url+"?action=getCategory";
    
    return this.http.get(url)
    .do((res : Response) => console.log(res))
    .map((res : Response) => res.json())   
  }

  getAllProduct(page){
    var url = this.url+"?action=getAllProduct&page="+page+"&lang="+this.language;

    return this.http.get(url)
    .do((res : Response)=> console.log(res))
    .map((res : Response)=>res.json())
  }

  getProduct(id){
    var url = this.url+"?action=getProduct&id="+id;

    return this.http.get(url)
      .do((res : Response)=> console.log(res))
      .map((res : Response) => res.json())
    
  }

  addtocart(id){
    this.cartlist.push(id);
  }

  moveoutcart(id){
    var index = this.cartlist.indexOf(id,0);
    if(index > -1){
      this.cartlist.splice(index,1);
    } 
  }

  getcartItem(id){
    if(id){
      var index = this.cartlist.indexOf(id,0);
      if(index > -1){
        return true;
      }else{
        return false;
      }
    }
  }

}
