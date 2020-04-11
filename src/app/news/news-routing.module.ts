import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsListComponent} from './news-list/news-list.component';
import {ArticleComponent} from './article/article.component';

const routes: Routes = [
  { path: '', component: NewsListComponent},
  { path: 'categories', redirectTo: '' },
  { path: 'tag/{category}', redirectTo: ''  },
  { path: 'authors', redirectTo: '' },
  { path: 'article', component: ArticleComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
