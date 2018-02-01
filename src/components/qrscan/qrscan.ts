import { NavController,ViewController,App } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Component } from '@angular/core';
import { ProductDetailPage } from '../../pages/product-detail/product-detail';


@Component({
  selector: 'qrscan',
  templateUrl: 'qrscan.html'
})
export class QrscanComponent {

  constructor(private app : App ,private qrScanner: QRScanner,private navCtrl : NavController,private viewCtrl:ViewController) {  }
  
  openqrscanner(){
     // Optionally request the permission early
     this.qrScanner.prepare()
     .then((status: QRScannerStatus) => {
       if (status.authorized) {
         // camera permission was granted
          console.log("Scan Click")

         // start scanning
         let scanSub = this.qrScanner.scan().subscribe((text: string) => {
           console.log('Scanned something', text);

           var splitID = text.split('/');
           var id = splitID[splitID.length-1];
           console.log("id :" +id)
            var name = "TEST";

            this.app.getRootNav().push(ProductDetailPage,{product_id:id,product_name:name},{animate: true, direction: 'forward'});

           this.qrScanner.hide(); // hide camera preview
           scanSub.unsubscribe(); // stop scanning
           this.navCtrl.pop();
         });

         this.qrScanner.resumePreview();

         // show camera preview
         this.qrScanner.show()
         .then((data : QRScannerStatus)=>{
           console.log("Scanner is :",data.showing);
         },err=>{
           console.log("error Scan");
         });
         

         // wait for user to scan something, then the observable callback will be called

       } else if (status.denied) {
         // camera permission was permanently denied
         // you must use QRScanner.openSettings() method to guide the user to the settings page
         // then they can grant the permission from there
       } else {
         // permission was denied, but not permanently. You can ask for permission again at a later time.
         alert('Else denied');
       }
     })
     .catch((e: any) => console.log('Error is', e));
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
