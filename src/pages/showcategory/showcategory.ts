import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowcategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showcategory',
  templateUrl: 'showcategory.html',
})
export class ShowcategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private translate : TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowcategoryPage');
  }

}
