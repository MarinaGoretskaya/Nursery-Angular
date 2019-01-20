import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MulchSupplierComponent } from './mulch-supplier.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'mulch supplier', component: MulchSupplierComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class MulchSupplierRoutingModule { }
