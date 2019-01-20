import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home.routing.module';

import { HomeComponent } from './components/home.component';
import { MainBottomComponent } from './components/main-bottom-component/main-bottom.component';
import { MainMiddleComponent } from './components/main-middle-component/main-middle.component';

@NgModule({
  imports: [HomeRoutingModule],
  declarations: [
    HomeComponent,
    MainBottomComponent,
    MainMiddleComponent
  ],
  exports: []
})
export class HomeModule {}