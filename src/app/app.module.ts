import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { HeaderComponent } from './book-store/header/header.component';
import { AdBannerComponent } from './book-store/main/ad-banner/ad-banner.component';
import { MainComponent } from './book-store/main/main.component';
import { WelcomeComponent } from './book-store/main/welcome/welcome.component';
import { NewArrivalComponent } from './book-store/main/new-arrival/new-arrival.component';
import { BookstoreBestsellersComponent } from './book-store/main/bookstore-bestsellers/bookstore-bestsellers.component';
import { BookstoreSearchFormComponent } from './book-store/main/bookstore-search-form/bookstore-search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FooterComponent,
    BookStoreComponent,
    HeaderComponent,
    AdBannerComponent,
    MainComponent,
    WelcomeComponent,
    NewArrivalComponent,
    BookstoreBestsellersComponent,
    BookstoreSearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
