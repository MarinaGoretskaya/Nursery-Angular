import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { MulchFundraisersComponent } from "./mulch-fundraisers.component";

const routes: Routes = [
  { path: 'mulch fundraisers', component: MulchFundraisersComponent}
];

@NgModule({
  declarations: [
    MulchFundraisersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MulchFundraisersComponent
  ]
})
export class MulchFundraisersModule { }
