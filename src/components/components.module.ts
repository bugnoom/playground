import { NgModule } from '@angular/core';
import { ProductloopComponent } from './productloop/productloop';
import { QrscanComponent } from './qrscan/qrscan';
@NgModule({
	declarations: [ProductloopComponent,
    QrscanComponent],
	imports: [],
	exports: [ProductloopComponent,
    QrscanComponent]
})
export class ComponentsModule {}
