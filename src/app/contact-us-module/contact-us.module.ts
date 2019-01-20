import { NgModule } from '@angular/core';

import { ContactUsRoutingModule } from './contact-us.routing.module';
import { ContactUsComponent } from './components/contact-us.component';

@NgModule({
  imports: [ContactUsRoutingModule],
  declarations: [
    ContactUsComponent
  ],
  exports: [
    ContactUsRoutingModule
  ]
})
export class ContactUsModule {}