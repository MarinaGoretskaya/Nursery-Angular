import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MulchSupplierComponent } from './components/mulch-supplier.component';
import { PeatMossComponent } from './components/peat-moss-component/peat-moss.component';
import { FertilizersComponent } from './components/fertilizers-component/fertilizers.component';

const routes: Routes = [
  { path: '', component: MulchSupplierComponent },
  { path: 'peat-moss', component: PeatMossComponent },
  { path: 'fertilizers', component: FertilizersComponent }
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
