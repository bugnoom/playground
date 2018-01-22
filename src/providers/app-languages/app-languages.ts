import { Injectable } from '@angular/core';

/*
  Generated class for the AppLanguagesProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AppLanguagesProvider {

  private languages : String[];
  
  constructor(){
    this.languages = ['en','th'];
  }

  public getLanguages() : String[]{
    return this.languages;
  }
 // constructor(public http: Http) {
 //   console.log('Hello AppLanguagesProvider Provider');
 // }
}