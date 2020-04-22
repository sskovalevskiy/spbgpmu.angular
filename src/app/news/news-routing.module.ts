import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsListComponent} from './news-list/news-list.component';
import {CategoriesComponent} from './categories/categories.component';
import {ArticleComponent} from './article/article.component';
import {AuthorsComponent} from './authors/authors.component';
import {AuthorComponent} from './author/author.component';

const routes: Routes = [
  {
    path: 'news', children: [
      {path: '', component: NewsListComponent},
      {path: ':id', component: ArticleComponent}
    ]
  },
  {path: 'categories', component: CategoriesComponent},
  {path: 'tag/:category', component: CategoriesComponent},
  {
    path: 'authors', children: [
      {path: '', component: AuthorsComponent},
      {path: ':name', component: AuthorComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {
}
