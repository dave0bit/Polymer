import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'servizi',
    loadChildren: './servizi/servizi.module#ServiziModule'
  },
  {
    path: 'chisiamo',
    loadChildren: './chisiamo/chisiamo.module#ChisiamoModule'
  },
  {
    path: 'contatti',
    loadChildren: './contatti/contatti.module#ContattiModule'
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
