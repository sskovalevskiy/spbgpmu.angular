import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Category} from '../models/category.model';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {
  }

  // Сделано по https://stackoverflow.com/questions/44940695/how-to-convert-observableany-to-array
  getCategories(): Observable<Array<Category>> {
      return this.http.get<Array<Category>>('./assets/categories.json');
  }

  getCategory(id: number | string): Observable<Category> {
    return this.getCategories()
      .pipe(
        map((categories: Array<Category>) =>  categories.find(category => category.id === +id)),
        catchError(err => Observable.throw('Error in getCategory method'))
      );
  }
}
