import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MulchFundraisersComponent } from './mulch-fundraisers.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'mulch fundraisers', component: MulchFundraisersComponent}
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
export class MulchFundraisersRoutingModule { }
