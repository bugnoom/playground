import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { ShippingPage } from '../shipping/shipping';
import { Facebook } from '@ionic-native/facebook'
import { NativeStorage } from '@ionic-native/native-storage';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public r: RemoteServiceProvider, private fb: Facebook, private nativeStorage: NativeStorage) {
    this.fb.browserInit(this.FB_APP_ID, 'v2.12')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    console.log(this.navParams);
    this.page = this.navParams.get('page');
  }

  doLogin() {
    let data = { username: 'Test', password: "aa" };
    // this.login.setfrmlogin(data);
    /* if(this.page == "shipping"){
      this.navCtrl.setRoot(ShippingPage);
    } */
    this.navCtrl.pop();

  }

  fblogin() {

    let permission = new Array<string>();
    let nav = this.navCtrl;
    let env = this;
    let remote = this.r;

    permission = ['public_profile', 'email'];

    remote.showloading();

    this.fb.login(permission).then(function (resp) {
      console.log("REST = ", resp);
      let userId = resp.authResponse.userID;
      let params = new Array<string>();

      //Getting name and gender properties
      env.fb.api("/me?fields=id,name,email,birthday,about,age_range,first_name,gender,last_name", params).then(function (user) {
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //now we have the users info, let's save it in the NativeStorage
        console.log("user detail", user);

        env.nativeStorage.setItem('fblogin', {id:"aaa"}).then(
          (data) => { remote.hideloading(); },
          err => { console.log("error", err); remote.hideloading(); }
        )
      })
    }, function (error) {
      console.log("error", error);
      alert(JSON.stringify(error));
    })
  }

  register() {
    alert("REGIS")
  }

}
