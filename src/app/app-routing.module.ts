import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { MulchSupplierModule } from './mulch-supplier/mulch-supplier.module';
import { SoilsModule } from './soils/soils.module';
import { MulchFundraisersModule } from './mulch-fundraisers/mulch-fundraisers.module';
import { ContactUsModule } from './contact-us/contact-us.module';


const routes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'mulch supplier', loadChildren: './mulch-supplier/mulch-supplier.module#MulchSupplierModule' },
  { path: 'soils', loadChildren: './soils/soils.module#SoilsModule' },
  { path: 'mulch fundraisers', loadChildren: './mulch-fundraisers/mulch-fundraisers.module#MulchFundraisersModule' },
  { path: 'contact us', loadChildren: './contact-us/contact-us.module#ContactUsModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
