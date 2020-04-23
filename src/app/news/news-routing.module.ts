import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {ArticleComponent} from './article/article.component';
import {AuthorsComponent} from './authors/authors.component';
import {NewsComponent} from './news.component';

const routes: Routes = [
  {
    path: 'news', children: [
      {path: '', component: NewsComponent},
      {path: ':id', component: ArticleComponent}
    ]
  },
  {path: 'categories', component: CategoriesComponent},
  {path: 'tag/:category', component: CategoriesComponent},
  {
    path: 'authors', children: [
      {path: '', component: AuthorsComponent},
      {path: ':name', redirectTo: '/authors'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {
}
