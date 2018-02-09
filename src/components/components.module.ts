import { NgModule } from '@angular/core';
import { ProductloopComponent } from './productloop/productloop';
import { QrscancomponentComponent } from './qrscancomponent/qrscancomponent';
import { AddtocartComponent } from './addtocart/addtocart';

@NgModule({
	declarations: [ProductloopComponent,
    QrscancomponentComponent,
    AddtocartComponent],
	imports: [],
	exports: [ProductloopComponent,
    QrscancomponentComponent,
    AddtocartComponent]
})
export class ComponentsModule {}
