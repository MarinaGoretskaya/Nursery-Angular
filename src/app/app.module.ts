import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponentComponent } from './common-components-module/header-component/header-component.component';
import { FooterComponentComponent } from './common-components-module/footer-component/footer-component.component';
import { MainGreetingComponent } from './common-components-module/main-greeting-component/main-greeting.component';

import { ContactUsModule } from './contact-us-module/contact-us.module';
import { SoilsModule } from './soils-module/soils.module';
import { MulchSupplierModule } from './mulch-supplier-module/mulch-supplier.module';
import { MulchFundraisersModule } from './mulch-fundraisers-module/mulch-fundraisers.module';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    MainGreetingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,

    ContactUsModule,
    SoilsModule,
    MulchSupplierModule,
    MulchFundraisersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
