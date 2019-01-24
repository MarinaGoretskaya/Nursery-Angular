import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-middle',
  templateUrl: './main-middle.component.html',
  styleUrls: ['./main-middle.component.css']
})
export class MainMiddleComponent implements OnInit {

  constructor(private router: Router) {}
  onPottingSoils() {
    this.router.navigate(['/potting-soil']);
  }
  onPeatMoss() {
    this.router.navigate(['/peat-moss']);
  }
  onFertilizers() {
    this.router.navigate(['/fertilizers']);
  }
  onMulch() {
    this.router.navigate(['/mulch']);
  }
  onCompost() {
    this.router.navigate(['/compost']);
  }

  ngOnInit() {}

}

