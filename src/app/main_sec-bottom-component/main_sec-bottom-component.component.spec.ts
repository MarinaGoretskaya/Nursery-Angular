import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBottomComponentComponent } from './section-bottom-component.component';

describe('SectionBottomComponentComponent', () => {
  let component: SectionBottomComponentComponent;
  let fixture: ComponentFixture<SectionBottomComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBottomComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBottomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
