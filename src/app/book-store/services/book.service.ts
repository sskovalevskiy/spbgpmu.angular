import {Injectable} from '@angular/core';
import {Book} from "./models/book.model";

const booksList = [
  new Book(
    1,
    'Thinking with Type, 2nd revised and expanded edition: A Critical Guide for Designers, Writers, Editors, &amp; Students',
    'http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book1-600.jpg',
    '',
    'Ellen Lupton',
    'Our all time best selling book is now available in a revised and expanded second edition.&nbsp;Thinking with Type&nbsp;is the definitive guide to using typography in visual communication, from the printed page to the computer screen. This revised edition includes forty-eight pages of new content, including the latest information on style sheets for print and the web, the use of ornaments…',
    ['HTML5'],
    false,
    false,
    true,
    900,
    950
  ),
  new Book(
    2,
    'Thinking with Type, 2nd revised and expanded edition: A Critical Guide for Designers, Writers, Editors, &amp; Students',
    'http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book1-600.jpg',
    '',
    'Ellen Lupton',
    'Our all time best selling book is now available in a revised and expanded second edition.&nbsp;Thinking with Type&nbsp;is the definitive guide to using typography in visual communication, from the printed page to the computer screen. This revised edition includes forty-eight pages of new content, including the latest information on style sheets for print and the web, the use of ornaments…',
    ['HTML5'],
    false,
    true,
    false,
    900
  )
];

const bookListPromise = Promise.resolve(booksList);

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() {
  }

  getBooks(): Promise<Book[]> {
    return bookListPromise
  }

  getBooksBy(condition: Map<string,string>): Promise<Book[]>{
    //TODO сейчас это заглушка. нужно сделать решение фильтрации по условию key|value
    return bookListPromise;
  }

  getBook(id: number | string): Promise<Book>{
    return this.getBooks()
      .then(tasks => tasks.find(task => task.id === +id))
      .catch(() => Promise.reject('Error in getBook() method'))
  }

  addBook(book: Book): void {
    booksList.push(book);
  }

  updateBook(book: Book): void {
    const i = booksList.findIndex(t => t.id === book.id);
    if (i > -1) {
      booksList.splice(i, 1, book);
    }
  }
}
