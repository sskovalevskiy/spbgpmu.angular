import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsListComponent} from './news-list/news-list.component';
import {LatestPostComponent} from './latest-post/latest-post.component';
import {PaginationComponent} from './pagination/pagination.component';
import {NewsCarouselComponent} from './news-carousel/news-carousel.component';
import {ArticleComponent} from './article/article.component';
import {NewsRoutingModule} from './news-routing.module';

@NgModule({
  declarations: [
    NewsListComponent,
    LatestPostComponent,
    PaginationComponent,
    NewsCarouselComponent,
    ArticleComponent
  ],
  exports: [
    NewsListComponent,
    LatestPostComponent,
    PaginationComponent,
    NewsCarouselComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule {
}
