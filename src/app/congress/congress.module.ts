import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CongressRoutingModule } from './congress-routing.module';
import { CongressComponent } from './congress.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [CongressComponent, ScheduleComponent],
  imports: [
    CommonModule,
    CongressRoutingModule
  ],
  exports: [CongressComponent]
})
export class CongressModule { }
