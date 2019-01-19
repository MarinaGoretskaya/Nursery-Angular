import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { MulchSupplierComponent } from "./mulch-supplier.component";

const routes: Routes = [
  {path: 'mulch supplier', component: MulchSupplierComponent}
];

@NgModule({
  declarations: [
    MulchSupplierComponent
  ],
  imports: [
    CommonModule,
    MulchSupplierComponent,
    RouterModule.forChild(routes)
  ]
})
export class MulchSupplierModule { }
