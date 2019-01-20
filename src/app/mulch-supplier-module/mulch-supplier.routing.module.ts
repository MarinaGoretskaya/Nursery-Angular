import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MulchSupplierComponent } from './components/mulch-supplier.component';

const routes: Routes = [
  { path: '', component: MulchSupplierComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MulchSupplierRoutingModule {}