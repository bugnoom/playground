import { NativeStorage } from '@ionic-native/native-storage';
import { ShippingPage } from './../pages/shipping/shipping';
import { ShowvariationPage } from './../pages/showvariation/showvariation';
import { AddtocartComponent } from './../components/addtocart/addtocart';
import { CatemenulistPage } from './../pages/catemenulist/catemenulist';
import { ShowcategoryPage } from './../pages/showcategory/showcategory';
import { HttpModule,Http } from '@angular/http';

import { PageSettingPage } from './../pages/page-setting/page-setting';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Facebook } from '@ionic-native/facebook'

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
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
import { Camera } from '@ionic-native/camera';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { BarcodeScanner} from '@ionic-native/barcode-scanner';
import { QrscancomponentComponent } from '../components/qrscancomponent/qrscancomponent';
import { UserloginProvider } from '../providers/userlogin/userlogin';


export function createTranslateLoader(http : HttpClient){
  /* return new TranslateHttpLoader(http,'./assets/i18n/','.json'); */
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');

}

@NgModule({
  declarations: [
    MyApp,
    CartlistPage,
    ShowvariationPage,
    LoginPage,
    MenuPage,
    ProfilePage,
    PromotionPage,
    PromotionDetailPage,
    CategorylistPage,
    CatemenulistPage,
    ShowcategoryPage,
    ShoppingPage,
    PageSettingPage,
    ProductDetailPage,
    TabsPage,
    ShippingPage,
    ProductloopComponent,
    AddtocartComponent,
    QrscancomponentComponent

  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader:{
        provide : TranslateLoader,
        useFactory:(createTranslateLoader),
        deps:[HttpClient,Http]
      }
      
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CartlistPage,
    ShowvariationPage,
    LoginPage,
    MenuPage,
    ProfilePage,
    PromotionPage,
    PromotionDetailPage,
    CategorylistPage,
    CatemenulistPage,
    ShowcategoryPage,
    ShoppingPage,
    PageSettingPage,
    ProductDetailPage,
    TabsPage,
    ShippingPage
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppLanguagesProvider,
    RemoteServiceProvider,
    Camera,
    NativeStorage,
    BarcodeScanner,
    AndroidPermissions,
    UserloginProvider,
    Facebook
  ]
})
export class AppModule {}
