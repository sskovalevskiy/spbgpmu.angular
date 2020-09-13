import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSearchFormComponent } from './main-page-search-form.component';

describe('SearchFormComponent', () => {
  let component: MainPageSearchFormComponent;
  let fixture: ComponentFixture<MainPageSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
