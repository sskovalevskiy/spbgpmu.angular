import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstoreBestsellersComponent } from './bookstore-bestsellers.component';

describe('BookstoreBestsellersComponent', () => {
  let component: BookstoreBestsellersComponent;
  let fixture: ComponentFixture<BookstoreBestsellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookstoreBestsellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookstoreBestsellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
