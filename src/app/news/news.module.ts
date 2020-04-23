import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsListComponent} from './shared/news-list/news-list.component';
import {LatestPostComponent} from './shared/latest-post/latest-post.component';
import {PaginationComponent} from './shared/pagination/pagination.component';
import {NewsCarouselComponent} from './shared/news-carousel/news-carousel.component';
import {CategoriesComponent} from './categories/categories.component';
import {ArticleComponent} from './article/article.component';
import {NewsRoutingModule} from './news-routing.module';
import {AuthorsComponent} from './authors/authors.component';

@NgModule({
    declarations: [
        NewsListComponent,
        LatestPostComponent,
        PaginationComponent,
        NewsCarouselComponent,
        CategoriesComponent,
        ArticleComponent,
        AuthorsComponent
    ],
  exports: [
    NewsCarouselComponent,
    LatestPostComponent,
    NewsListComponent,
    PaginationComponent
  ],
    imports: [
        CommonModule,
        NewsRoutingModule
    ]
})
export class NewsModule {
}
