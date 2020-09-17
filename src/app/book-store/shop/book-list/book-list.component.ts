import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BookService} from "../../services/book.service";
import {Book} from "../../services/models/book.model";

@Component({
  selector: 'app-shop',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookListComponent implements OnInit {

  books: Array<Book>;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks().catch(err => console.log(err));
  }

  private async getBooks(){
    this.books = await this.bookService.getBooks();
  }
}
