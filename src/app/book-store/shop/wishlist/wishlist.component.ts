import {Component, OnInit} from '@angular/core';
import {Book} from "../../services/models/book.model";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  books: Array<Book> = new Array<Book>(
    new Book(
      1,
      "Professional Ajax, 2nd Edition",
      "//tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book5-300-80x80.jpg",
      ["//tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book5-300-80x80.jpg 80w, //tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book5-300-150x150.jpg 150w, //tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book5-300-100x100.jpg 100w, //tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book5-300-136x136.jpg 136w, //tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book5-300-45x45.jpg 45w"],
      "",
      "",
      "",
      [],
      false,
      true,
      true,
      "In Stock",
      600,
      645
    ),
    new Book(
      2,
      "Above the Fold: Understanding the Principles of Successful Web Site Design",
      "//tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book12-300-80x80.jpg",
      ["//tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book12-300-80x80.jpg 80w, //tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book12-300-150x150.jpg 150w, //tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book12-300-100x100.jpg 100w, //tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book12-300-136x136.jpg 136w, //tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book12-300-45x45.jpg 45w"],
      "",
      "",
      "",
      [],
      false,
      true,
      false,
      "In Stock",
      100
    ),
    new Book(
      3,
      "100 Things Every Designer Needs to Know About People (Voices That Matter)",
      "//tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2012/12/book16-300-80x80.jpg",
      ["//tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2012/12/book16-300-80x80.jpg 80w, //tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2012/12/book16-300-150x150.jpg 150w, //tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2012/12/book16-300-100x100.jpg 100w, //tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2012/12/book16-300-136x136.jpg 136w, //tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2012/12/book16-300-45x45.jpg 45w"],
      "",
      "",
      "",
      [],
      false,
      true,
      false,
      "In Stock",
      10
    )
  )

  constructor() {
  }

  ngOnInit() {
  }

}
