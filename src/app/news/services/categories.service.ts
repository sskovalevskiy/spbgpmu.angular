import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Category} from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<any> {
    return this.http.get('./assets/categories.json');
  }

  getCategoryById(categoryId: number) {
    return new Category(1, 'Science', 'Posts for the most curious ones..', 'science',
      'http://157.230.217.118:3001/content/images/2019/07/photo-1559762691-617a33825bc6.jpeg');
  }
}
