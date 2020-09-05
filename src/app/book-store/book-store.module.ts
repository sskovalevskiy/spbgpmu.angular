import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BookStoreComponent} from "./book-store.component";
import {HeaderComponent} from "./header/header.component";
import {AdBannerComponent} from "./main/ad-banner/ad-banner.component";
import {MainComponent} from "./main/main.component";
import {WidgetComponent} from "./widget/widget.component";

@NgModule({
  declarations: [
    BookStoreComponent,
    HeaderComponent,
    AdBannerComponent,
    MainComponent,
    WidgetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookStoreModule { }
