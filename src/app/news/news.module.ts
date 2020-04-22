import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsListComponent} from './news-list/news-list.component';
import {LatestPostComponent} from './latest-post/latest-post.component';
import {PaginationComponent} from './pagination/pagination.component';
import {NewsCarouselComponent} from './news-carousel/news-carousel.component';
import {CategoriesComponent} from './categories/categories.component';
import {ArticleComponent} from './article/article.component';
import {NewsRoutingModule} from './news-routing.module';
import {AuthorsComponent} from './authors/authors.component';
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [
    NewsListComponent,
    LatestPostComponent,
    PaginationComponent,
    NewsCarouselComponent,
    CategoriesComponent,
    ArticleComponent,
    AuthorsComponent,
    AuthorComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule {
}
