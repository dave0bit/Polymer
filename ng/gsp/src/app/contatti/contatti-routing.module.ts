import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContattiListComponent } from './contatti-list/contatti-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContattiListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContattiRoutingModule { }
