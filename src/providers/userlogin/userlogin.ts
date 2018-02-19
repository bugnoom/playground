import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

/*
  Generated class for the UserloginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserloginProvider {

  data : any;
  logedin : any;

  constructor(public http: HttpClient, public nativestorage : NativeStorage) {
    console.log('Hello UserloginProvider Provider');
  }

  checklogin(){
    this.nativestorage.getItem('logedin').then(
      data => {this.logedin = data},
      erro => {console.log(erro)}
    );
    console.log(this.logedin);
  }

  setlogin(object){
    // variable object is a value to add to stroage, format look like {} example : {name:"test",pass:"12234"}
    this.nativestorage.setItem('logedin',object).then(
      () => {console.log("login success"); true},
      err =>{console.log("Error to login"); false}
    )
  }

  userRegister(data){
    // user register and send data to Webservice API for register
  }

}
