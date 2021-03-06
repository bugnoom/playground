import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { ProductDetailPage } from './../../pages/product-detail/product-detail';
import { Component, Input } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { App, LoadingController } from 'ionic-angular';


/**
 * Generated class for the QrscancomponentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'qrscancomponent',
  templateUrl: 'qrscancomponent.html'
})
export class QrscancomponentComponent {

  testNav;
  results:any;
  product_name : any;

  @Input('options') options : BarcodeScannerOptions;
  
  constructor(private loadingCtrl : LoadingController,private qrscan : BarcodeScanner, private app : App, private r : RemoteServiceProvider ) {
       
  }

 
  qrscanner(){
     this.qrscan.scan()
    .then((barcodedata)=>{
      if(!barcodedata.cancelled){
        console.log(barcodedata);
        this.testNav = this.app.getRootNavById('n4');
        let t = barcodedata.text.split('/');
        let id = t[t.length-1];
    
        //console.log("get ID :"+id)
        this.getproductName(id);
      }
     
    },err => {console.log("Cancel",err);})
    
   // console.log(this.product_name);
    //this.testNav.push(ProductDetailPage,{product_id:id,product_name:name});
    
  //  console.log("product is : "+this.results.text);
  }

  getproductName(id){
    let loader = this.loadingCtrl.create({
      content : 'Loadding...'
    });

    loader.present().then(()=>{
      this.r.getProduct(id).subscribe(
        data => {
           this.testNav.push(ProductDetailPage,{product_id:data.id,product_name:data.name})
      },
        error=>  console.log("Error"),
      ()=>loader.dismiss())
    })
   
  }

}
