import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mulch-fundraisers',
  templateUrl: './mulch-fundraisers.component.html'
})
export class MulchFundraisersComponent implements OnInit {

  constructor(private router: Router) {}
  onMulch() {
    this.router.navigate(['/mulch']);
  }
  onCompost() {
    this.router.navigate(['/compost']);
  }

  ngOnInit() {}

}
