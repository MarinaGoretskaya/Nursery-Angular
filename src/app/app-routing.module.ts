import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './home-module/home.module#HomeModule',
    data: {title: 'Home'}
  },
  { path: 'contact-us',
    loadChildren: './contact-us-module/contact-us.module#ContactUsModule',
    data: {title: 'Contact\u00A0us'}
  },
  { path: 'soils',
    loadChildren: './soils-module/soils.module#SoilsModule',
    data: {title: 'Soils'}
  },
  { path: 'mulch-supplier',
    loadChildren: './mulch-supplier-module/mulch-supplier.module#MulchSupplierModule',
    data: {title: 'Mulch\u00A0supplier'}
  },
  { path: 'mulch-fundraiser',
    loadChildren: './mulch-fundraisers-module/mulch-fundraisers.module#MulchFundraisersModule',
    data: {title: 'Mulch\u00A0fundraiser'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
