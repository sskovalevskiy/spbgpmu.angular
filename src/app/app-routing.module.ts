import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {CongressComponent} from './congress/congress.component';
import {CongressModule} from './congress/congress.module';
import {NewsComponent} from './news/news.component';
import {NewsModule} from './news/news.module';

const routes: Routes = [
  { path: 'congress', component: CongressComponent},
  { path: 'news', component: NewsModule},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CongressModule, NewsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
