import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Article} from '../../models/article.model';
import {NewsService} from '../../services/news.service';
import {CategoriesService} from '../../services/categories.service';
import {map, take} from 'rxjs/operators';
import {of} from 'rxjs';
import {Category} from "../../models/category.model";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  // category: string;
  news$: Observable<Array<Article>>;

  constructor(private newsService: NewsService,
              private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.news$ = this.newsService.getNews();
  }

  getCategory(categoryId: number | string): Observable<Category> {
    // Работает. Но возвращает для всех новостей одинаковый title
    // this.categoriesService.getCategory(categoryId).subscribe(c => this.category = c.title);
    // return this.category;

    // return this.categoriesService.getCategory(categoryId);

    // Работает. Возвращает Observable<string>, который корректно распознается
    // return of('Science');

    // Работает. Возвращает Observable<Category>, который корректно распознается
    return of(new Category(1, 'Science', 'Posts for the most curious ones..', 'science',
      'http://157.230.217.118:3001/content/images/2019/07/photo-1559762691-617a33825bc6.jpeg'));
  }
}
