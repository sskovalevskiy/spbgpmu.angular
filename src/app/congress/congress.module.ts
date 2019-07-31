import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CongressRoutingModule } from './congress-routing.module';
import { CongressComponent } from './congress.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [CongressComponent, ScheduleComponent, SpeakersComponent, LocationComponent],
  imports: [
    CommonModule,
    CongressRoutingModule
  ],
  exports: [CongressComponent]
})
export class CongressModule { }
