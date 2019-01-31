import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChisiamoRoutingModule } from './chisiamo-routing.module';
import { ChisiamoListComponent } from './chisiamo-list/chisiamo-list.component';

@NgModule({
  declarations: [ChisiamoListComponent],
  imports: [
    CommonModule,
    ChisiamoRoutingModule
  ]
})
export class ChisiamoModule { }
