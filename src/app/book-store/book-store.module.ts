import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookStoreRoutingModule} from './book-store-routing.module';
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
import {MainPageSearchFormComponent} from "./shop/main/search-form/main-page-search-form.component";
import {WishlistComponent} from "./shop/wishlist/wishlist.component";
import {CartComponent} from './shop/cart/cart.component';
import {CheckoutComponent} from './shop/checkout/checkout.component';
import {MyAccountComponent} from './my-account/my-account.component';
import {BookListComponent} from './shop/book-list/book-list.component';
import {BookComponent} from './shop/book/book.component';
import {ContactComponent} from './contact/contact.component';
import {FaqComponent} from './faq/faq.component';
import {DeliveryComponent} from './delivery/delivery.component';
import {PageTitleComponent} from './shared/page-title/page-title.component';
import {BusinessHoursComponent} from './shared/sidebar/business-hours/business-hours.component';
import {CustomerLoginComponent} from './shared/sidebar/customer-login/customer-login.component';
import {ProductCategoriesComponent} from './shared/sidebar/product-categories/product-categories.component';
import {ProductsComponent} from './shared/sidebar/products/products.component';
import {FindProductFormComponent} from './shared/sidebar/find-product-form/find-product-form.component';
import {SearchFormComponent} from "./shared/sidebar/search-form/search-form.component";

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
    MainPageSearchFormComponent,
    WishlistComponent,
    CartComponent,
    CheckoutComponent,
    MyAccountComponent,
    BookListComponent,
    BookComponent,
    ContactComponent,
    FaqComponent,
    DeliveryComponent,
    PageTitleComponent,
    BusinessHoursComponent,
    CustomerLoginComponent,
    ProductCategoriesComponent,
    ProductsComponent,
    FindProductFormComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    BookStoreRoutingModule
  ]
})
export class BookStoreModule {
}
