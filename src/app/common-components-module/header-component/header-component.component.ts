import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { routes } from './../../app-routing.module';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})

export class HeaderComponentComponent implements OnInit, OnChanges {

  readonly routes = routes;
  public currentUrl: string;

  constructor(private router: Router) { }

  ngOnInit() {
    // console.log(this.routes);
    // console.log(this.router.url);
    this.router.events.subscribe((val: RouterEvent) => {
      console.log(val.url);
      this.currentUrl = val.url;
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log (changes);
  }
}
