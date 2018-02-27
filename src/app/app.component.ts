import { UserloginProvider } from './../providers/userlogin/userlogin';
import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { AppLanguagesProvider } from '../providers/app-languages/app-languages';

import { MenuPage } from '../pages/menu/menu';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MenuPage;
  

  constructor(platform: Platform,private translate: TranslateService, private appLanguages: AppLanguagesProvider, statusBar: StatusBar, splashScreen: SplashScreen,private events : Events,  private userlogin : UserloginProvider) {
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
    this.translate.setDefaultLang('TH');

    // Detect current Language
    let userLang = navigator.language.split("-")[0];

    console.log("this is language");
    console.log(userLang);
    console.log("find a language");
    console.log(this.appLanguages.getLanguages().indexOf(userLang))
    
    userLang = (this.appLanguages.getLanguages().indexOf(userLang) > -1) ? userLang : 'TH';

    //the lang to use, if the lang is not available, it will use the current loader to get them
    this.translate.use(userLang);
  }

}

