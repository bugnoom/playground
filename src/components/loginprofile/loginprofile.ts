import { NavController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';

/**
 * Generated class for the LoginprofileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'loginprofile',
  templateUrl: 'loginprofile.html'
})
export class LoginprofileComponent {

  text: string;
  image: string;
  name: string;
  logedin: string;

  constructor(private storageCtrl: Storage, private navCtrl: NavController, private events: Events) {
    
  }

  ngOnInit(){
    this.events.subscribe('checklogin', () => {
     this.showDetail();
    })
    this.showDetail();
  }

  showDetail(){
    this.storageCtrl.get('pic').then(data => { this.image = data });
    this.storageCtrl.get('fullname').then(data => this.name = data);
    this.storageCtrl.get('logedin').then(data => this.logedin = data);
  }

}
