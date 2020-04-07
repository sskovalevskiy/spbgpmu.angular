import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {CongressComponent} from './congress/congress.component';
import {CongressModule} from './congress/congress.module';
import {NewsComponent} from './news/news.component';

const routes: Routes = [
  { path: '', component: CongressComponent},
  { path: 'news', component: NewsComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CongressModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
