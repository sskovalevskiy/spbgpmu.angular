import {Injectable} from '@angular/core';
import {Category} from '../models/category.model';
import {Observable, of} from 'rxjs';

const categories: Array<Category> = [
  new Category(1, 'Science', 'Posts for the most curious ones..', 'science',
    'http://157.230.217.118:3001/content/images/2019/07/photo-1559762691-617a33825bc6.jpeg'),
  new Category(2, 'History', 'Posts full of historic value and useful information.', 'history',
    'https://images.unsplash.com/photo-1503993656770-0479a287559e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ&amp;s=072ee3522f4a36f9cd671e62e6bb4430'),
  new Category(3, 'Sports', 'All about that game last night.', 'sports',
    'https://images.unsplash.com/photo-1524748969064-cf3dabd7b84d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ&amp;s=ac060f5dff456a0b3fabab140a9a09a8'),
  new Category(4, 'Travel', 'Everything you need to know for your next trip.', 'travel',
    'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ&amp;s=f77bb44deae20328aae0ead8073dc209'),
  new Category(5, 'Getting Started', 'Learn to use Ghost.', 'getting-started',
    'https://images.unsplash.com/photo-1536506252322-a4cb9cae8655?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ&amp;s=ccfbc96c2938788d0ac3b15a409e6f85')
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
