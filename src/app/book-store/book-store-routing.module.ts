import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from "./main/main.component";
import {WishlistComponent} from "./wishlist/wishlist.component";
import {BookStoreComponent} from "./book-store.component";
import {CartComponent} from "./cart/cart.component";

const routes: Routes = [
  {
    path: 'books', component: BookStoreComponent, children: [
      {path: '', component: MainComponent},
      {path: 'cart', component: CartComponent},
      {path: 'wishlist', component: WishlistComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookStoreRoutingModule {
}
