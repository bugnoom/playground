import { Component, Input } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { NavController, NavParams,App } from 'ionic-angular';
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

  @Input('options') options : BarcodeScannerOptions;

  constructor(private qrscan : BarcodeScanner,private nav : NavController, private app : App ) {
       
  }

  qrscanner(){
    const results = this.qrscan.scan();
    console.log(results);
  }

}
