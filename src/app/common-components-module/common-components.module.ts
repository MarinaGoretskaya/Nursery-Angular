import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header-component/header.component';
import { FooterComponent } from './footer-component/footer.component';
import { MainGreetingComponent } from './main-greeting-component/main-greeting.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainGreetingComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainGreetingComponent
  ]
})
export class CommonComponentsModule { }
