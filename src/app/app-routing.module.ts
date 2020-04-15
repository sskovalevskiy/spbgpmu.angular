import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {CongressComponent} from './congress/congress.component';
import {CongressModule} from './congress/congress.module';
import {NewsModule} from './news/news.module';

const routes: Routes = [
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CongressModule, NewsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
