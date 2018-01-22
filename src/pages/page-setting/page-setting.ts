import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-page-setting',
  templateUrl: 'page-setting.html',
})
export class PageSettingPage {

  private languages: Array<String>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

   // this.languages = ('th');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageSettingPage');
  }

}
