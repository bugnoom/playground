import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from 'ng2-translate';
import { AppLanguagesProvider } from '../providers/app-languages/app-languages';

import { MenuPage } from '../pages/menu/menu';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MenuPage;

  constructor(platform: Platform,private translate: TranslateService, private appLanguages: AppLanguagesProvider, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

     this.configNG2();

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }

  private configNG2() {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('th');

    // Detect current Language
    var userLang = navigator.language.split("-")[0];
    userLang = (this.appLanguages.getLanguages().indexOf(userLang) > -1) ? userLang : 'th';

    //the lang to use, if the lang is not available, it will use the current loader to get them
    this.translate.use(userLang);
  }

}

