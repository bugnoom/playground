import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import { AppLanguagesProvider } from '../../providers/app-languages/app-languages';

@IonicPage()
@Component({
  selector: 'page-page-setting',
  templateUrl: 'page-setting.html',
})
export class PageSettingPage {

  // Variable for language
  private languages: Array<String>;


  constructor(public navCtrl: NavController, public navParams: NavParams,public translate : TranslateService,
    public appLanguages: AppLanguagesProvider) {

      this.languages = appLanguages.getLanguages();
      
      console.log('log language = '+this.languages);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageSettingPage'); 
  }

}
