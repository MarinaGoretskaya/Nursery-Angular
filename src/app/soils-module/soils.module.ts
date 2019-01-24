import { NgModule } from '@angular/core';

import { SoilsRoutingModule } from './soils.routing.module';
import { SoilsComponent } from './components/soils.component';
import { PottingSoilComponent } from './components/potting-soil-component/potting-soil.component';

@NgModule({
  imports: [
    SoilsRoutingModule
  ],
  declarations: [
    SoilsComponent,
    PottingSoilComponent
  ],
  exports: []
})
export class SoilsModule {}
