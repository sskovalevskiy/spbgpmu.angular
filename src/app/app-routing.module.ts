import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConferenceModule} from './conference/conference.module';
import {ConferenceComponent} from './conference/conference.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: ConferenceComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ConferenceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
