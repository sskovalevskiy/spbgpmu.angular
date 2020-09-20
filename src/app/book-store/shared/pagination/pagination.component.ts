import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Observable, range} from "rxjs";
import {map, filter, toArray} from "rxjs/operators";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() offset: number = 0;
  @Input() limit: number = 1;
  @Input() size: number = 1;
  @Input() range: number = 2;

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  currentPage: number;
  totalPages: number;
  pages: Observable<number[]>;

  constructor() {
  }

  ngOnInit() {
    this.getPages(this.offset, this.limit, this.size);
  }

  ngOnChanges() {
    this.getPages(this.offset, this.limit, this.size);
  }

  getPages(offset: number, limit: number, size: number) {
    this.currentPage = this.getCurrentPage(offset, limit);
    this.totalPages = this.getTotalPages(limit, size);
    this.pages = range(-this.range, this.range * 2 + 1)
      .pipe(map(offset => this.currentPage + offset))
      .pipe(filter(page => this.isValidPageNumber(page, this.totalPages)))
      .pipe(toArray());
  }

  getCurrentPage(offset: number, limit: number): number {
    return Math.floor(offset / limit) + 1;
  }

  getTotalPages(limit: number, size: number): number {
    return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
  }

  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  selectPage(page: number, event) {
    event.preventDefault();
    if (this.isValidPageNumber(page, this.totalPages)) {
      this.pageChange.emit((page - 1) * this.limit);
    }
  }

  cancelEvent(event) {
    event.preventDefault();
  }
}
