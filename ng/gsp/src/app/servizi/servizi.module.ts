import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiziRoutingModule } from './servizi-routing.module';
import { ServiziListComponent } from './servizi-list/servizi-list.component';

@NgModule({
  declarations: [ServiziListComponent],
  imports: [
    CommonModule,
    ServiziRoutingModule
  ]
})
export class ServiziModule { }
