
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  badgecount : number = 0;

  constructor() {
    console.log('Hello ServiceProvider Provider');
  }

 
  
}
