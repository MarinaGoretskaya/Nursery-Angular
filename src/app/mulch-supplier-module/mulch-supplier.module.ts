import { NgModule } from '@angular/core';
import { MulchSupplierRoutingModule } from './mulch-supplier.routing.module';
import { MulchSupplierComponent } from './components/mulch-supplier.component';

@NgModule({
  imports: [
    MulchSupplierRoutingModule
  ],
  declarations: [
    MulchSupplierComponent
  ],
  exports: []
})
export class MulchSupplierModule {}