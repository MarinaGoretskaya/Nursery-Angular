import { NgModule } from '@angular/core';
import { MulchSupplierRoutingModule } from './mulch-supplier.routing.module';
import { MulchSupplierComponent } from './components/mulch-supplier.component';
import { PeatMossComponent } from './components/peat-moss-component/peat-moss.component';
import { FertilizersComponent } from './components/fertilizers-component/fertilizers.component';

@NgModule({
  imports: [
    MulchSupplierRoutingModule
  ],
  declarations: [
    MulchSupplierComponent,
    PeatMossComponent,
    FertilizersComponent
  ],
  exports: []
})
export class MulchSupplierModule {}
