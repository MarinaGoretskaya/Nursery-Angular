import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { routes } from '../../app-routing.module';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  readonly routes = routes;
  public currentUrl: RouterEvent;

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
