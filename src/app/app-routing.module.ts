import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {CongressComponent} from './congress/congress.component';
import {CongressModule} from './congress/congress.module';
import {BookStoreComponent} from './book-store/book-store.component';
import {BookStoreModule} from "./book-store/book-store.module";

const routes: Routes = [
  { path: 'congress', component: CongressComponent},
  { path: 'books', component: BookStoreComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CongressModule, BookStoreModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
