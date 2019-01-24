import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoilsComponent } from './components/soils.component';
import { PottingSoilComponent } from './components/potting-soil-component/potting-soil.component';


const routes: Routes = [
  { path: '', component: SoilsComponent },
  { path: 'potting-soil', component: PottingSoilComponent }
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
