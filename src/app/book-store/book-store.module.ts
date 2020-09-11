import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookStoreRoutingModule } from './book-store-routing.module';
import {BookStoreComponent} from "./book-store.component";
import {HeaderComponent} from "./header/header.component";
import {AdBannerComponent} from "./shop/main/ad-banner/ad-banner.component";
import {MainComponent} from "./shop/main/main.component";
import {WidgetComponent} from "./widget/widget.component";
import {FooterComponent} from "./footer/footer.component";
import {WelcomeComponent} from "./shop/main/welcome/welcome.component";
import {NewArrivalComponent} from "./shop/main/new-arrival/new-arrival.component";
import {BestSellingComponent} from "./shop/main/best-selling/best-selling.component";
import {MonthlyExclusiveComponent} from "./shop/main/monthly-exclusive/monthly-exclusive.component";
import {SearchFormComponent} from "./shop/main/search-form/search-form.component";
import {WishlistComponent} from "./shop/wishlist/wishlist.component";
import { CartComponent } from './shop/cart/cart.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { BookListComponent } from './shop/book-list/book-list.component';
import { BookComponent } from './shop/book/book.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    BookStoreComponent,
    HeaderComponent,
    AdBannerComponent,
    MainComponent,
    WidgetComponent,
    FooterComponent,
    WelcomeComponent,
    NewArrivalComponent,
    BestSellingComponent,
    MonthlyExclusiveComponent,
    SearchFormComponent,
    WishlistComponent,
    CartComponent,
    CheckoutComponent,
    MyAccountComponent,
    BookListComponent,
    BookComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    BookStoreRoutingModule
  ]
})
export class BookStoreModule { }
