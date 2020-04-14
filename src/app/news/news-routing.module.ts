import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsListComponent} from './news-list/news-list.component';
import {CategoriesComponent} from './categories/categories.component';

const routes: Routes = [
  {
    path: 'news', component: NewsListComponent, children: [
      { path: 'categories', component: CategoriesComponent },
      { path: 'tag/:category', redirectTo: '/'  },
      { path: 'authors', redirectTo: '/' },
    ]
  }

,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {
}
