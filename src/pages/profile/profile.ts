import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';
import { UserloginProvider } from '../../providers/userlogin/userlogin';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl : ViewController,private events : Events, private userlogin : UserloginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
    this.events.subscribe('checklogin:changed',()=>{
      this.userlogin.logintextCtrl();
     
    })
    
    this.userlogin.logintextCtrl();
}

}