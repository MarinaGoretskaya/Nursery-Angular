import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soils',
  templateUrl: './soils.component.html',
})
export class SoilsComponent implements OnInit {

  constructor(private router: Router) {}
  onPottingSoils() {
    this.router.navigate(['/potting-soil']);
  }

  ngOnInit() {}

}
