import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { HeaderComponent } from './book-store/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FooterComponent,
    BookStoreComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
