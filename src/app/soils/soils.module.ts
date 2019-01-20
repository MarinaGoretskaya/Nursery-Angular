import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoilsComponent } from './soils.component';
import { SoilsRoutingModule } from './soils-routing.module';


@NgModule({
  declarations: [
    SoilsComponent
  ],
  imports: [
    CommonModule,
    SoilsRoutingModule
  ],
  exports: [
    SoilsComponent
  ]
})
export class SoilsModule { }
