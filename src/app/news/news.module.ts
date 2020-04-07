import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { LatestPostComponent } from './latest-post/latest-post.component';

@NgModule({
  declarations: [NewsListComponent, LatestPostComponent],
  exports: [
    NewsListComponent,
    LatestPostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NewsModule { }
