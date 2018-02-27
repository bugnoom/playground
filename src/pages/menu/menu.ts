import { Storage } from '@ionic/storage';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { PageSettingPage } from './../page-setting/page-setting';

import { LoginPage } from './../login/login';
import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, Events } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import { TranslateService } from '@ngx-translate/core';


export interface PageInterface{
  title : string;
  pageName : string;
  tabComponent? : any;
  index? : number;
  icon : string
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage = TabsPage;

  @ViewChild(Nav) nav : Nav;

  pages : PageInterface[]=[
    {title : 'shopping_tab', pageName:'ShoppingPage',tabComponent:'ShoppingPage',index:0,icon:'home'},
    {title : 'category_title', pageName:'ShowCaegoryPage',tabComponent:'ShowCaegoryPage',index:4,icon:'list'},
    {title : 'myorder_title', pageName:'PromotionPage',tabComponent:'PromotionPage',index:1,icon:'clipboard'},
    {title : 'playground_news_title', pageName:'CartlistPage',tabComponent:'CartlistPage',index:2,icon:'document'},
    {title : 'playground_shop_title', pageName:'LoginPage',tabComponent:'LoginPage',index:3,icon:'cafe'}
  ];

  loginpage : PageInterface[] = [
      {title : 'playground_shop_title', pageName:'LoginPage',tabComponent:'LoginPage',index:3,icon:'cafe'}
    ];

    logintext: string;


 

  constructor(public navCtrl: NavController,public translate:TranslateService,private r : RemoteServiceProvider, public storageCtrl : Storage,private events : Events) {  
    this.events.subscribe('checklogin',()=>{
      this.storageCtrl.get('logedin').then((data)=>{
        if(data =='1'){
          this.logintext = this.translate.instant('logout');
        }else{
          this.logintext = this.translate.instant('login_txt');
        }
      })
     })

     this.storageCtrl.get('logedin').then((data)=>{
      if(data =='1'){
        this.logintext = this.translate.instant('logout');
      }else{
        this.logintext = this.translate.instant('login_txt');
      }
    })
    
  }
  
 

  openPage(page:PageInterface){
    let params = {};

    //the index is equal to the order of our tabs
    if(page.index){
      params = {tabIndex : page.index,page, prepage : page.pageName};
    }

    //the active child nav 
    if(this.nav.getActiveChildNavs() && page.index != undefined){
      this.nav.getActiveChildNavs()[0].select(page.index);
    }else{
       this.nav.setRoot(page.pageName, params,{animate: true, direction: 'forward'});
    }
  }

  isActive(page:PageInterface){
    let childNav = this.nav.getActiveChildNavs()[0];

    if(childNav){
      if(childNav.getSelected()&&childNav.getSelected().root===page.tabComponent){
        return 'primary';
      }
      return;
    }

    if(this.nav.getActive()&&this.nav.getActive().name === page.pageName){
      return 'primary';
    }
    return;
  }

  logout(page:PageInterface){
     
   let env = this
    this.r.showloading();
    this.storageCtrl.get('logedin').then(
      (data)=>{
        if(data == '1'){
          env.storageCtrl.clear();
          //env.openPage(page);
          this.navCtrl.push(LoginPage,{}, {animate: true, direction: 'forward'});
        }else{
          //env.openPage(page);
          this.navCtrl.push(LoginPage,{}, {animate: true, direction: 'forward'});
        }
        this.events.publish("checklogin");
        env.r.hideloading();
      }
    )
   
  }

  opensetting(){
    this.navCtrl.push(PageSettingPage,{},{animate: true, direction: 'forward'});
  }

 

}