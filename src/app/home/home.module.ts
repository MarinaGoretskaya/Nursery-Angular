import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

//import { MainMiddleComponentComponent } from './main_middle-component/main_middle-component.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    //MainMiddleComponentComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
