import { NgModule } from '@angular/core';
import { ProductloopComponent } from './productloop/productloop';
import { QrscancomponentComponent } from './qrscancomponent/qrscancomponent';
import { AddtocartComponent } from './addtocart/addtocart';
import { LoginprofileComponent } from './loginprofile/loginprofile';

@NgModule({
	declarations: [ProductloopComponent,
    QrscancomponentComponent,
    AddtocartComponent,
    LoginprofileComponent],
	imports: [],
	exports: [ProductloopComponent,
    QrscancomponentComponent,
    AddtocartComponent,
    LoginprofileComponent]
})
export class ComponentsModule {}
