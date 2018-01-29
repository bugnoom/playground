import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'qrscan',
  templateUrl: 'qrscan.html'
})
export class QrscanComponent {

  constructor(private qrScanner: QRScanner) {  }

  openqrscanner(){
     // Optionally request the permission early
     this.qrScanner.prepare()
     .then((status: QRScannerStatus) => {
       if (status.authorized) {
         // camera permission was granted


         // start scanning
         let scanSub = this.qrScanner.scan().subscribe((text: string) => {
           console.log('Scanned something', text);

           this.qrScanner.hide(); // hide camera preview
           scanSub.unsubscribe(); // stop scanning
         });

         // show camera preview
         this.qrScanner.show();

         // wait for user to scan something, then the observable callback will be called

       } else if (status.denied) {
         // camera permission was permanently denied
         // you must use QRScanner.openSettings() method to guide the user to the settings page
         // then they can grant the permission from there
       } else {
         // permission was denied, but not permanently. You can ask for permission again at a later time.
       }
     })
     .catch((e: any) => console.log('Error is', e));
  }




}
