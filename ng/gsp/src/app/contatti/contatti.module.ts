import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContattiRoutingModule } from './contatti-routing.module';
import { ContattiListComponent } from './contatti-list/contatti-list.component';

@NgModule({
  declarations: [ContattiListComponent],
  imports: [
    CommonModule,
    ContattiRoutingModule
  ]
})
export class ContattiModule { }
