import { PageSettingPage } from './../pages/page-setting/page-setting';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule,Http } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { MyApp } from './app.component';
import { CartlistPage } from '../pages/cartlist/cartlist';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';
import { PromotionPage } from './../pages/promotion/promotion';
import { ProfilePage } from './../pages/profile/profile';
import { ShoppingPage } from '../pages/shopping/shopping';
import { ServiceProvider } from '../providers/service/service';
import { PromotionDetailPage } from '../pages/promotion-detail/promotion-detail';

import { CategorylistPage } from './../pages/categorylist/categorylist';


@NgModule({
  declarations: [
    MyApp,
    CartlistPage,
    LoginPage,
    MenuPage,
    ProfilePage,
    PromotionPage,
    PromotionDetailPage,
    CategorylistPage,
    ShoppingPage,
    PageSettingPage,
    TabsPage,

  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CartlistPage,
    LoginPage,
    MenuPage,
    ProfilePage,
    PromotionPage,
    PromotionDetailPage,
    CategorylistPage,
    ShoppingPage,
    PageSettingPage,
     TabsPage
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
