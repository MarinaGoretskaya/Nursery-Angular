import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { RouterModule } from "@angular/router";
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
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
