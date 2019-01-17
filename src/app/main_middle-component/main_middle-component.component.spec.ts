import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTopComponentComponent } from './section-top-component.component';

describe('SectionTopComponentComponent', () => {
  let component: SectionTopComponentComponent;
  let fixture: ComponentFixture<SectionTopComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTopComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
