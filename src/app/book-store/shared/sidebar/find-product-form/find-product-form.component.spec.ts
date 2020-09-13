import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindProductFormComponent } from './find-product-form.component';

describe('FindProductFormComponent', () => {
  let component: FindProductFormComponent;
  let fixture: ComponentFixture<FindProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
