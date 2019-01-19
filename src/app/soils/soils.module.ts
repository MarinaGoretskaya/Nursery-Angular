import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { SoilsComponent } from "./soils.component";

const routes: Routes = [
  { path: 'soils', component: SoilsComponent}
];

@NgModule({
  declarations: [
    SoilsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SoilsComponent
  ]
})
export class SoilsModule { }
