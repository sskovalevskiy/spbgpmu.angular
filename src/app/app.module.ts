import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {FooterComponent} from './footer/footer.component';
import {BookStoreModule} from "./book-store/book-store.module";
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
