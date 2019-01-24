import { NgModule } from '@angular/core';
import { MulchFundraisersRoutingModule } from './mulch-fundraisers.routing.module';
import { MulchFundraisersComponent } from './components/mulch-fundraisers.component';
import { CompostComponent } from './components/compost-component/compost.component';
import { MulchComponent } from './components/mulch-component/mulch.component';


@NgModule({
  imports: [
    MulchFundraisersRoutingModule
  ],
  declarations: [
    MulchFundraisersComponent,
    CompostComponent,
    MulchComponent
  ],
  exports: []
})
export class MulchFundraisersModule {}
