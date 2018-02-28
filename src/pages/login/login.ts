
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { RegsiterPage } from './../regsiter/regsiter';
import { UserloginProvider } from './../../providers/userlogin/userlogin';
import { ProfilePage } from './../profile/profile';
import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Events } from 'ionic-angular';
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
    username: "",
    password: "",
    fb: 0
  }

  constructor(public events: Events, public navCtrl: NavController, public navParams: NavParams, public r: RemoteServiceProvider, private fb: Facebook, private userlogin: UserloginProvider, private toastCtrl: ToastController, public translate: TranslateService, public storageCtrl: Storage,private ngzone : NgZone) {
    //this.fb.browserInit(this.FB_APP_ID, 'v2.12')
  }

  ionViewDidEnter(){
    this.events.subscribe('checklogin:changed',()=>{
      this.userlogin.logintextCtrl();
    })
    this.userlogin.logintextCtrl();

    this.storageCtrl.get('logedin').then(
      data => {
        if (data == '1') {
          this.openpreviouspage()
          //this.navCtrl.setRoot(ProfilePage,{},{});
        } else {
          this.ngzone.run(data=>{
          return false;
            //this.navCtrl.setRoot(this.navCtrl.getActive().component);
          });
          //this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }
      },
    ).catch(err => { console.log("error", err); })


    this.events.subscribe('reloadscreen', () => {
      this.storageCtrl.get('logedin').then(
        data => {
          if (data == '1') {
            //this.openpreviouspage()
            //this.navCtrl.setRoot(ProfilePage,{},{});
          } else {
            this.navCtrl.pop();
          }
        },
      ).catch(err => { console.log("error", err); })
    })

    console.log('ionViewDidLoad LoginPage');
    console.log(this.navParams);
    this.page = this.navParams.get('page');
  }

  doLogin() {
    let env = this;
    env.r.showloading();
    console.log("email is and password", env.user.username, env.user.password);
    if (env.user.username == "" || env.user.password == "") {
      alert("Please input email or password");
    } else {
      env.userlogin.checklogin(env.user).subscribe(
        (resp) => {
          if (resp['data'].status == "200") {
            console.log("Success Email", resp);
            //Add data to Storage
            env.userlogin.addtostorage(resp, env.user.fb);

            // Redirect to Page
            env.openpreviouspage();
          } else {
            console.log("can't login", resp);
            env.toastCtrl.create({
              message: env.translate.instant("login_incorrect"),
              duration: 2500,
              position: 'top'
            }).present();
          }

        },
        (err) => {
          console.log("can't login", err);
          env.toastCtrl.create({
            message: env.translate.instant("login_incorrect"),
            duration: 2500,
            position: 'top'
          }).present();
        }, () => { env.r.hideloading() }
      )
      console.log('Login Success')


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
        env.r.showloading();
        env.userlogin.checklogin(user).subscribe(
          (data) => {
            console.log('recieve data', data);
            // add data to local storage
            env.userlogin.addtostorage(data, env.user.fb);
            env.openpreviouspage();
          },
          (err) => {
            console.log('error', err);
            env.toastCtrl.create({
              message: env.translate.instant("login_incorrect"),
              duration: 2500,
              position: 'top'
            }).present();
          },
          () => { env.r.hideloading() }
        )
      })
    }, (error) => {
      console.log("error fb login", error);
      env.toastCtrl.create({
        message: env.translate.instant("login_incorrect"),
        duration: 2500,
        position: 'top'
      }).present();
    })
  }

  register() {
    this.navCtrl.push(RegsiterPage, { page: this.page }, {});
  }

  openpreviouspage() {
    if (this.page) {
      console.log("open page is ", this.page)
    } else {
      this.navCtrl.push(ProfilePage, {}, {});
    }


  }
}
