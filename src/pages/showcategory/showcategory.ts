import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategorylistPage } from '../categorylist/categorylist';

/**
 * Generated class for the ShowcategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showcategory',
  templateUrl: 'showcategory.html',
})
export class ShowcategoryPage {

  categorys : any = 0;
  grid: Array<Array<string>>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private translate : TranslateService, private r : RemoteServiceProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ShowcategoryPage');
    this.getcategory();
  }
  
  getcategory(){
    this.r.getCategories().subscribe(
      data => this.categorys = data,
      error=> console.log("Error category lsit"),
      ()=>this.showdata()
    );
  }

  openCategory(id,name) {
    this.navCtrl.push(CategorylistPage, { category_id: id,category_name:name }, { animate: true, direction: 'forward' });
   // console.log("Open Cate Id" + id)
  }

  showdata() {
    this.grid = Array(Math.ceil(this.categorys.length / 2))
    console.log(this.grid);
    let rowNum = 0;
    for (let i = 0; i < this.categorys.length; i += 2) {
      this.grid[rowNum] = Array(2);

      if (this.categorys[i]) {
        this.grid[rowNum][0] = this.categorys[i]
      }

      if (this.categorys[i + 1]) {
        this.grid[rowNum][1] = this.categorys[i + 1];
      }
      rowNum++;
    }
  }

}
