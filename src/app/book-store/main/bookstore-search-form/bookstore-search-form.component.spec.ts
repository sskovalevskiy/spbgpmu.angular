import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstoreSearchFormComponent } from './bookstore-search-form.component';

describe('BookstoreSearchFormComponent', () => {
  let component: BookstoreSearchFormComponent;
  let fixture: ComponentFixture<BookstoreSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookstoreSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookstoreSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
