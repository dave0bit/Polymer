import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiziListComponent } from './servizi-list/servizi-list.component';

const routes: Routes = [
  {
    path: '',
    component: ServiziListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiziRoutingModule { }
