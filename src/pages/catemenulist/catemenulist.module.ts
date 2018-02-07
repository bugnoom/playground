import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatemenulistPage } from './catemenulist';

@NgModule({
  declarations: [
    CatemenulistPage,
  ],
  imports: [
    IonicPageModule.forChild(CatemenulistPage),
  ],
})
export class CatemenulistPageModule {}
