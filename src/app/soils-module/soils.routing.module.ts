import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoilsComponent } from './components/soils.component';

const routes: Routes = [
  { path: '', component: SoilsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SoilsRoutingModule {}