import {Injectable} from '@angular/core';
import {Category} from '../models/category.model';
import {Observable, of} from 'rxjs';

const categories: Array<Category> = [
  new Category(1, 'History', 'Posts full of historic value and useful information.', 'history'),
  new Category(2, 'Science', 'Posts for the most curious ones..', 'science'),
  new Category(3, 'Sports', 'All about that game last night.', 'sports'),
  new Category(4, 'Travel', 'Everything you need to know for your next trip.', 'travel'),
  new Category(5, 'Getting Started', 'Learn to use Ghost.', 'getting-started')
];

const categoriesObservable: Observable<Array<Category>> = of(categories);

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() {
  }

  getCategories(): Observable<Category[]> {
    return categoriesObservable;
  }
}
