import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';

// import { SoilsComponent } from '../soils-module/components/soils.component';
// import { PottingSoilComponent } from '../soils-module/components/potting-soil-component/potting-soil.component';
// import { SoilsModule } from '../soils-module/soils.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
//  { path: 'potting-soil', component: PottingSoilComponent }
  // { path: 'my-home', component: MyHomeComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    // SoilsModule,
    // PottingSoilComponent
  ]
})
export class HomeRoutingModule {}
