import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { RegsiterPage } from './../regsiter/regsiter';
import { UserloginProvider } from './../../providers/userlogin/userlogin';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { ShippingPage } from '../shipping/shipping';
import { Facebook } from '@ionic-native/facebook';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  page: string;
  private FB_APP_ID: number = 208638756382298;
  user = {
    email: "",
    password: "",
    fb: 0
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public r: RemoteServiceProvider, private fb: Facebook, private userlogin: UserloginProvider, private toastCtrl: ToastController, public translate : TranslateService, public storageCtrl : Storage) {
    //this.fb.browserInit(this.FB_APP_ID, 'v2.12')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    console.log(this.navParams);
    this.page = this.navParams.get('page');
  }

  doLogin() {
    console.log("email is and password", this.user.email, this.user.password);
    if (this.user.email == "" || this.user.password == "") {
      alert("Please input email or password");
    } else {
      if (this.userlogin.checklogin(this.user)) {
        //go to page;
        console.log('Login Success')
      }
    }

    // this.login.setfrmlogin(data);
    /* if(this.page == "shipping"){
      this.navCtrl.setRoot(ShippingPage);
    } */
    //this.navCtrl.pop();

  }

  fblogin() {
    let permission = new Array<string>();
    permission = ['public_profile', 'email'];

    //remote.showloading();
    let env = this

    this.fb.login(permission).then((resp) => {
      console.log("REST = ", resp);
      let userId = resp.authResponse.userID;
      let params = new Array<string>();

      //Getting name and gender properties
      this.fb.api("/me?fields=id,name,email,birthday,about,first_name,gender,last_name", params).then(function (user) {
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //now we have the users info, let's save it in the NativeStorage
        console.log("user detail", user);
        user.fb = 1;
        user.fbid = userId;
        //console.log('check Login is ',env.userlogin.checklogin(user))
        env.userlogin.checklogin(user).subscribe(
          (data) => {
            console.log('recieve data', data);
            // add data to local storage
            this.logedin = true;
           
          },
          (err) => {
            console.log('error', err);
            env.toastCtrl.create({
              message: env.translate.instant("login_incorrect"),
              duration: 2500,
              position: 'top'
            }).present(); 
          }
        ) 
      })
    }, (error) => {
      console.log("error fb login", error);
      alert(JSON.stringify(error));
    })
  }

  register() {
    this.navCtrl.push(RegsiterPage, {}, {});
  }

  openpreviouspage() {
    console.log("open page is ", this.page)

  }
}
