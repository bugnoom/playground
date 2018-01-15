import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ShoppingPage } from '../shopping/shopping';
import { PromotionPage } from '../promotion/promotion';
import { ProfilePage } from '../profile/profile';


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
    {title : 'Shopping', pageName:'Shopping',tabComponent:ShoppingPage,index:0,icon:'home'},
    {title : 'Promotion', pageName:'Promotion',tabComponent:PromotionPage,index:1,icon:'pricetags'},
    {title : 'Cartlist', pageName:'Cart',index:2,icon:'cart'},
    {title : 'Profile', pageName:'Profile',tabComponent:ProfilePage,index:3,icon:'person'}
  ];
  constructor(public navCtrl: NavController) {  }

  openPage(page:PageInterface){
    let params = {};

    //the index is equal to the order of our tabs
    if(page.index){
      params = {tabIndex : page.index};
    }

    //the active child nav 
    if(this.nav.getActiveChildNav() && page.index != undefined){
      this.nav.getActiveChildNav().select(page.index);
    }else{
       this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page:PageInterface){
    let childNav = this.nav.getActiveChildNav();

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
 
}