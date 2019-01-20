import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MulchFundraisersComponent } from './components/mulch-fundraisers.component';

const routes: Routes = [
  { path: '', component: MulchFundraisersComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MulchFundraisersRoutingModule {}