import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CongressRoutingModule } from './congress-routing.module';
import { CongressComponent } from './congress.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { LocationComponent } from './location/location.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { AboutComponent } from './about/about.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeadlineComponent } from './headline/headline.component';

@NgModule({
  declarations: [CongressComponent, ScheduleComponent, SpeakersComponent, LocationComponent, SponsorsComponent, AboutComponent, NewsletterComponent, NavigationComponent, HeadlineComponent],
  imports: [
    CommonModule,
    CongressRoutingModule
  ],
  exports: [CongressComponent]
})
export class CongressModule { }
