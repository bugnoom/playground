import { CategorylistPage } from './../categorylist/categorylist';
import { LoginPage } from './../login/login';
import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ShoppingPage } from '../shopping/shopping';
import { PromotionPage } from '../promotion/promotion';

import { CartlistPage } from '../cartlist/cartlist';


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
    {title : 'Categories', pageName:'Category',tabComponent:CategorylistPage,index:4,icon:'list'},
    {title : 'My Orders', pageName:'Promotion',tabComponent:PromotionPage,index:1,icon:'clipboard'},
    {title : 'Playground News', pageName:'Cart',tabComponent:CartlistPage,index:2,icon:'document'},
    {title : 'Setting', pageName:'Profile',tabComponent:LoginPage,index:3,icon:'cog'},
    {title : 'Playground Store', pageName:'Profile',tabComponent:LoginPage,index:3,icon:'cafe'}
  ];
  constructor(public navCtrl: NavController) {  }

  openPage(page:PageInterface){
    let params = {};

    //the index is equal to the order of our tabs
    if(page.index){
      params = {tabIndex : page.index};
    }

    //the active child nav 
    if(this.nav.getActiveChildNavs() && page.index != undefined){
      this.nav.getActiveChildNavs()[0].select(page.index);
    }else{
       this.nav.setRoot(page.pageName, {},{animate: true, direction: 'forward'});
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

  logout(){
    this.navCtrl.setRoot(LoginPage,{}, {animate: true, direction: 'forward'});
  }

}