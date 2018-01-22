import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TranslateService } from 'ng2-translate';
import { AppLanguagesProvider } from '../../providers/app-languages/app-languages';


@IonicPage()
@Component({
  selector: 'page-page-setting',
  templateUrl: 'page-setting.html',
})
export class PageSettingPage {

  private languages: Array<String>;

  constructor(public navCtrl: NavController, public navParams: NavParams,    public translate : TranslateService,
    public appLanguages: AppLanguagesProvider) {

    this.languages = appLanguages.getLanguages();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageSettingPage');
  }

}
