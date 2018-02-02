import { NgModule } from '@angular/core';
import { ProductloopComponent } from './productloop/productloop';
import { QrscancomponentComponent } from './qrscancomponent/qrscancomponent';

@NgModule({
	declarations: [ProductloopComponent,
    QrscancomponentComponent],
	imports: [],
	exports: [ProductloopComponent,
    QrscancomponentComponent]
})
export class ComponentsModule {}
