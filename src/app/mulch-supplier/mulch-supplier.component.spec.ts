import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulchSupplierComponent } from './mulch-supplier.component';

describe('MulchSupplierComponent', () => {
  let component: MulchSupplierComponent;
  let fixture: ComponentFixture<MulchSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulchSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulchSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
