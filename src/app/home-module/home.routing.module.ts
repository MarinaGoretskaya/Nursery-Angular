import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import {MyHomeComponent} from "./components/my-home-component/my-home-component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'my-home', component: MyHomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}
