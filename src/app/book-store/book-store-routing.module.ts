import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from "./shop/main/main.component";
import {WishlistComponent} from "./shop/wishlist/wishlist.component";
import {BookStoreComponent} from "./book-store.component";
import {CartComponent} from "./shop/cart/cart.component";
import {CheckoutComponent} from "./shop/checkout/checkout.component";
import {MyAccountComponent} from "./my-account/my-account.component";
import {BookListComponent} from "./shop/book-list/book-list.component";
import {BookComponent} from "./shop/book/book.component";
import {ContactComponent} from "./contact/contact.component";
import {FaqComponent} from "./faq/faq.component";
import {DeliveryComponent} from "./delivery/delivery.component";

const routes: Routes = [
  {
    path: 'books', component: BookStoreComponent, children: [
      {path: '', component: MainComponent},
      {path: 'shop', component: BookListComponent},
      //TODO path 'product' нужно будет заменить на 'shop?bookId=1'
      {path: 'product', component: BookComponent},
      {path: 'cart', component: CartComponent},
      {path: 'wishlist', component: WishlistComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'delivery', component: DeliveryComponent},
      {path: 'my-account', component: MyAccountComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'faq', component: FaqComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookStoreRoutingModule {
}
