import { KeysPipe } from './../pipes/loopipe/loopipe';
import { PromotionPage } from './../pages/promotion/promotion';
import { ProfilePage } from './../pages/profile/profile';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { CartlistPage } from '../pages/cartlist/cartlist';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';
import { ShoppingPage } from '../pages/shopping/shopping';



@NgModule({
  declarations: [
    MyApp,
    CartlistPage,
    LoginPage,
    MenuPage,
    ProfilePage,
    PromotionPage,
    TabsPage,
    ShoppingPage,
    KeysPipe

  ],
  imports: [
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
    TabsPage,
    ShoppingPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
