import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MulchFundraisersComponent } from './components/mulch-fundraisers.component';
import { CompostComponent } from './components/compost-component/compost.component';
import { MulchComponent } from './components/mulch-component/mulch.component';

const routes: Routes = [
  { path: '', component: MulchFundraisersComponent },
  { path: 'compost', component: CompostComponent },
  { path: 'mulch', component: MulchComponent }
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
