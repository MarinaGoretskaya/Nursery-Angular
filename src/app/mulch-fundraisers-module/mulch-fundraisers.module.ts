import { NgModule } from '@angular/core';
import { MulchFundraisersRoutingModule } from './mulch-fundraisers.routing.module';
import { MulchFundraisersComponent } from './components/mulch-fundraisers.component';

@NgModule({
  imports: [
    MulchFundraisersRoutingModule
  ],
  declarations: [
    MulchFundraisersComponent
  ],
  exports: []
})
export class MulchFundraisersModule {}