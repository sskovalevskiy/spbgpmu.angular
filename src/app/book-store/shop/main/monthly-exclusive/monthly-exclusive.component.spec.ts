import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyExclusiveComponent } from './monthly-exclusive.component';

describe('MonthlyExclusiveComponent', () => {
  let component: MonthlyExclusiveComponent;
  let fixture: ComponentFixture<MonthlyExclusiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyExclusiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyExclusiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
