import {Injectable} from '@angular/core';
import {Author} from "./models/author.model";
import {Category} from "./models/category.model";

const authors = [
  new Author(1, "Thoriq Firdaus"),
  new Author(2, "Tim Kadlec"),
  new Author(3, "Steve Krug"),
  new Author(4, "Susan Weinschenk"),
  new Author(5, "Austin Kleon"),
  new Author(6, "Ellen Lupton"),
  new Author(7, "Patrick McNeil"),
  new Author(8, "Brian Miller"),
  new Author(9, "Kyle Simpson"),
  new Author(10, "Nicholas C. Zakas")
]

const authorsPromise = Promise.resolve(authors);

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() {
  }

  getAuthors():Promise<Author[]>{
    return authorsPromise;
  }

  getAuthor(id: number | string): Promise<Author>{
    return this.getAuthors()
      .then(authors => authors.find(author => author.id === +id))
      .catch(() => Promise.reject('Error in getAuthor() method'))
  }
}
