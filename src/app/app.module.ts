import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HomeModule } from "./home/home.module";
import { MulchSupplierModule } from "./mulch-supplier/mulch-supplier.module";
import { SoilsModule } from "./soils/soils.module";
import { MulchFundraisersModule } from "./mulch-fundraisers/mulch-fundraisers.module";
import { ContactUsModule } from "./contact-us/contact-us.module";

import { Routes, RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,

    HomeModule,
    MulchSupplierModule,
    SoilsModule,
    MulchFundraisersModule,
    ContactUsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
