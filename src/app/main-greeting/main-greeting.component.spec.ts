import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGreetingComponent } from './main-greeting.component';

describe('MainGreetingComponent', () => {
  let component: MainGreetingComponent;
  let fixture: ComponentFixture<MainGreetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainGreetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
