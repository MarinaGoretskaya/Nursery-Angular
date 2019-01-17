import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulchFundraisersComponent } from './mulch-fundraisers.component';

describe('MulchFundraisersComponent', () => {
  let component: MulchFundraisersComponent;
  let fixture: ComponentFixture<MulchFundraisersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulchFundraisersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulchFundraisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
