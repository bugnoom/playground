import { Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {
  badgecount : number = 0;
  private url : string = "http://localhost/WooService/services.php";//"http://192.168.1.48/WooService/services.php";

  constructor(private http: Http) {
    console.log('Hello RemoteServiceProvider Provider');
  }

  getCategories(){
    var url = this.url+"?action=getCategory";
    return this.http.get(url)
    .do((res : Response) => console.log(res))
    .map((res : Response) => res.json())
    
  }
}
