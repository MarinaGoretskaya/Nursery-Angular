import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mulch-supplier',
  templateUrl: './mulch-supplier.component.html',
})
export class MulchSupplierComponent implements OnInit {

  constructor(private router: Router) {}
  onFertilizers() {
    this.router.navigate(['/fertilizers']);
  }
  onPeatMoss() {
    this.router.navigate(['/peat-moss']);
  }

  ngOnInit() {}

}
