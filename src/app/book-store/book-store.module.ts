import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookStoreRoutingModule } from './book-store-routing.module';
import {BookStoreComponent} from "./book-store.component";
import {HeaderComponent} from "./header/header.component";
import {AdBannerComponent} from "./main/ad-banner/ad-banner.component";
import {MainComponent} from "./main/main.component";
import {WidgetComponent} from "./widget/widget.component";
import {FooterComponent} from "./footer/footer.component";
import {WelcomeComponent} from "./main/welcome/welcome.component";
import {NewArrivalComponent} from "./main/new-arrival/new-arrival.component";
import {BestSellingComponent} from "./main/best-selling/best-selling.component";
import {MonthlyExclusiveComponent} from "./main/monthly-exclusive/monthly-exclusive.component";
import {SearchFormComponent} from "./main/search-form/search-form.component";
import {WishlistComponent} from "./wishlist/wishlist.component";
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

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
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    BookStoreRoutingModule
  ]
})
export class BookStoreModule { }
