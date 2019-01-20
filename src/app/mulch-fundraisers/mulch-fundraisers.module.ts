import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MulchFundraisersComponent } from './mulch-fundraisers.component';
import { MulchFundraisersRoutingModule } from './mulch-fundraisers-routing.module';



@NgModule({
  declarations: [
    MulchFundraisersComponent
  ],
  imports: [
    CommonModule,
    MulchFundraisersRoutingModule
  ],
  exports:[
    MulchFundraisersComponent
  ]
})
export class MulchFundraisersModule { }
