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

  data: any;
  logedin: any;

  name: string;
  gender: string;
  picture: string;
  email: string;
  id: number;
  fb: number = 0;

  constructor(public http: HttpClient, public nativestorage: NativeStorage) {
    console.log('Hello UserloginProvider Provider');
  }

  checklogin() {
    this.nativestorage.getItem('logedin').then(
      data => { this.logedin = data },
      erro => { console.log(erro) }
    );
    console.log(this.logedin);
  }

  setfblogin() {
    // variable object is a value to add to stroage, format look like {} example : {name:"test",pass:"12234"}
    this.nativestorage.setItem('logedin',{user:'abc',pass : 'aaa'});
    /* this.nativestorage.setItem('logedin', {
      name: this.name, gender: this.gender, picture: this.picture, email: this.email, id: this.id,
    }).then(
      (data) => {
        console.log("login success", data);
        this.nativestorage.setItem('logedin', { fb: this.fb }).then(
          (data) => { console.log("login success"); },
          err => { console.log("fb error", err); return false }
        )
        return true
      },
      err => { console.log("Error to login", err); return false }
    ) */

  }

  setfrmlogin(a) {

  }

  userRegister(data) {
    // user register and send data to Webservice API for register
  }

}
