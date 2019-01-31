import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChisiamoListComponent } from './chisiamo-list/chisiamo-list.component';
const routes: Routes = [
  {
    path: '',
    component: ChisiamoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChisiamoRoutingModule { }
