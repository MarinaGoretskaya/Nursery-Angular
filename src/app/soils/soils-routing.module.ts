import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoilsComponent } from './soils.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'soils', component: SoilsComponent}
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
export class SoilsRoutingModule { }
