import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsListComponent} from './news-list/news-list.component';
import {CategoriesComponent} from './categories/categories.component';
import {ArticleComponent} from './article/article.component';

const routes: Routes = [
  {
    path: 'news', children: [
      { path: '', component: NewsListComponent },
      { path: ':id', component: ArticleComponent }
    ]
  },
  { path: 'categories', component: CategoriesComponent },
  { path: 'tag/:category', component: CategoriesComponent },
  { path: 'authors', children: [
      { path: ':name', redirectTo: '/authors' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {
}
