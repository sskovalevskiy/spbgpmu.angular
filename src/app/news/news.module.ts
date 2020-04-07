import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { LatestPostComponent } from './latest-post/latest-post.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [NewsListComponent, LatestPostComponent, PaginationComponent],
  exports: [
    NewsListComponent,
    LatestPostComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NewsModule { }
