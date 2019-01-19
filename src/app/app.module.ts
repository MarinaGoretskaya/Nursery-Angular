import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeModule } from "./home/home.module";
import { MulchSupplierModule } from "./mulch-supplier/mulch-supplier.module";
import { SoilsModule } from "./soils/soils.module";
import { MulchFundraisersModule } from "./mulch-fundraisers/mulch-fundraisers.module";
import { ContactUsModule } from "./contact-us/contact-us.module";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { MainMiddleComponentComponent } from './main_middle-component/main_middle-component.component';
import { MainBottomComponentComponent } from './main_bottom-component/main_bottom-component.component';
import { MainGreetingComponent } from './main-greeting/main-greeting.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MulchSupplierComponent } from './mulch-supplier/mulch-supplier.component';
import { SoilsComponent } from './soils/soils.component';
import { MulchFundraisersComponent } from './mulch-fundraisers/mulch-fundraisers.component';

import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    MainMiddleComponentComponent,
    MainBottomComponentComponent,
    MainGreetingComponent,
    ContactUsComponent,
    MulchSupplierComponent,
    SoilsComponent,
    MulchFundraisersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HomeModule,
    MulchSupplierModule,
    SoilsModule,
    MulchFundraisersModule,
    ContactUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
