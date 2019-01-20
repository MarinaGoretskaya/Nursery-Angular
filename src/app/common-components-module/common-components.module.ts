import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponentComponent } from "./header-component/header-component.component";
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { MainGreetingComponent } from "./main-greeting-component/main-greeting.component"

@NgModule({
  declarations: [
    HeaderComponentComponent,
    FooterComponentComponent,
    MainGreetingComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponentComponent,
    FooterComponentComponent,
    MainGreetingComponent
  ]
})
export class CommonComponentsModule { }
