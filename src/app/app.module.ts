import { PageSettingPage } from './../pages/page-setting/page-setting';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {  HttpModule,Http} from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { AppLanguagesProvider } from '../providers/app-languages/app-languages';

import { MyApp } from './app.component';
import { CartlistPage } from '../pages/cartlist/cartlist';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';
import { PromotionPage } from './../pages/promotion/promotion';
import { ProfilePage } from './../pages/profile/profile';
import { ShoppingPage } from '../pages/shopping/shopping';
import { PromotionDetailPage } from '../pages/promotion-detail/promotion-detail';

import { CategorylistPage } from './../pages/categorylist/categorylist';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';
import { ProductloopComponent } from '../components/productloop/productloop';
import { QrscanComponent } from '../components/qrscan/qrscan';
import { Camera } from '@ionic-native/camera';
import { QRScanner } from '@ionic-native/qr-scanner';

export function createTranslateLoader(http:Http){
  return new TranslateStaticLoader(http,'./assets/i18n','.json');
}

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
    ProductDetailPage,
    TabsPage,
    ProductloopComponent,
    QrscanComponent

  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      provide : TranslateLoader,
      useFactory:(createTranslateLoader),
      deps:[Http]
    })
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
    ProductDetailPage,
     TabsPage
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppLanguagesProvider,
    RemoteServiceProvider,
    Camera,
    QRScanner
  ]
})
export class AppModule {}
