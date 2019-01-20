import { NgModule } from '@angular/core';
import { SoilsRoutingModule } from './soils.routing.module';
import { SoilsComponent } from './components/soils.component';

@NgModule({
  imports: [
    SoilsRoutingModule
  ],
  declarations: [
    SoilsComponent
  ],
  exports: []
})
export class SoilsModule {}