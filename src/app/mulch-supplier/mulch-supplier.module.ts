import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MulchSupplierComponent } from './mulch-supplier.component';
import { MulchSupplierRoutingModule } from './mulch-supplier-routing.module';



@NgModule({
  declarations: [
    MulchSupplierComponent
  ],
  imports: [
    CommonModule,
    MulchSupplierRoutingModule
  ],
  exports:[
    MulchSupplierComponent
  ]
})
export class MulchSupplierModule {}


