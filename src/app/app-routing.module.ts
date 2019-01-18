import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MulchSupplierComponent } from './mulch-supplier/mulch-supplier.component';
import { SoilsComponent } from './soils/soils.component';
import { MulchFundraisersComponent } from './mulch-fundraisers/mulch-fundraisers.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mulch-suppliers', component: MulchSupplierComponent },
  { path: 'soils', component: SoilsComponent },
  { path: 'mulch-fundraisers', component: MulchFundraisersComponent },
  { path: 'contact us', component: ContactUsComponent },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
