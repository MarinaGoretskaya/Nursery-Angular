import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home-module/home.module#HomeModule' },
  { path: 'contact-us', loadChildren: './contact-us-module/contact-us.module#ContactUsModule' },
  { path: 'soils', loadChildren: './soils-module/soils.module#SoilsModule' },
  { path: 'mulch-supplier', loadChildren: './mulch-supplier-module/mulch-supplier.module#MulchSupplierModule' },
  { path: 'mulch-fundraiser', loadChildren: './mulch-fundraisers-module/mulch-fundraisers.module#MulchFundraisersModule' }
];
export default routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
