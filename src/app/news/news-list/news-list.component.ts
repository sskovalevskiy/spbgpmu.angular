import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Article} from '../models/article.model';
import {NewsService} from '../services/news.service';
import {CategoriesService} from '../services/categories.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  news$: Observable<Array<Article>>;

  constructor(private newsService: NewsService,
              private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.news$ = this.newsService.getNews();
  }

  getCategoryById(categoryId: number) {
    return this.categoriesService.getCategoryById(categoryId);
  }
}
