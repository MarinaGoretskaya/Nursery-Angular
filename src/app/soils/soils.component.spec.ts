import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilsComponent } from './soils.component';

describe('SoilsComponent', () => {
  let component: SoilsComponent;
  let fixture: ComponentFixture<SoilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
