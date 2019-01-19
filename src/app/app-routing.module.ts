import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ContactUsComponent } from './contact-us/contact-us.component';
//import { MulchSupplierComponent } from './mulch-supplier/mulch-supplier.component';
//import { SoilsComponent } from './soils/soils.component';
//import { MulchFundraisersComponent } from './mulch-fundraisers/mulch-fundraisers.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
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
