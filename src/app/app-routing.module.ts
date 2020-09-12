import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {CongressComponent} from './congress/congress.component';
import {CongressModule} from './congress/congress.module';
import {BookStoreModule} from "./book-store/book-store.module";

const routerOptions: ExtraOptions = {
  //scrollPositionRestoration: on change of router url the position of the screen will set to the top.
  // scrollPositionRestoration: 'enabled',
  //anchorScrolling : When set to ‘enabled’, scrolls to the anchor element when the URL has a fragment. Anchor scrolling is disabled by default.
  anchorScrolling: 'enabled',
  //scrollOffset: Configures the scroll offset the router will use when scrolling to an element.
  // scrollOffset: [0, 64],
};

const routes: Routes = [
  {path: 'congress', component: CongressComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions), CongressModule, BookStoreModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
