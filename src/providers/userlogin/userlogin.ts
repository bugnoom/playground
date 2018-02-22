import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { RemoteServiceProvider } from '../remote-service/remote-service';


/*
  Generated class for the UserloginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserloginProvider {

  

  constructor(public http: HttpClient, public storage : Storage, public r : RemoteServiceProvider) {
    console.log('Hello UserloginProvider Provider');
  }

   checklogin(user : any) {
    /*  //get data from database
     let customer = this.r.getCustomer(user);
     if(customer){ //if can get data
        //set data to storage
        this.storage.set();
        //go to page return true;
     }else{
       let create = this.r.createCustomer(user);
       if(create){
         this.storage.set();
         // go to page return true
       }else{
         //toast error and return to login page return false
       } 
     }*/
     
    
     //else
     //create data to server
     // go to page
    
  } 

  setlogin(user : any) {
   for(let key in user){
     this.storage.set(key,user[key]);
   }
  }

}
