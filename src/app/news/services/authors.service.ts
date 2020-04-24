import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Author} from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) {
  }

  getAuthors(): Observable<any> {
    return this.http.get('./assets/authors.json');
  }

  getAuthor(author: string): Observable<Author> {
    return of(new Author(2, 'John Doe', 'Iceland',
      'Ghost is a fully open source, adaptable platform for building and running a modern online publication.',
      'http://157.230.217.118:3001/content/images/2018/09/Jason-Davis-headshot-min.jpg',
      'http://157.230.217.118:3001/content/images/2018/09/thanos-pal-570889-unsplash-min-2.jpg'
    ));
  }
}
