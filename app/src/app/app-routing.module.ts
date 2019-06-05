import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovementsListComponent } from './modules/movements/components/movements-list/movements-list.component';
import { DonorsComponent } from './modules/donors/donors.component';

const routes: Routes = [
  {
    path: 'movements',
    // component: MovementsListComponent
    loadChildren: './modules/movements/movements.module#MovementsModule'
  },
  {
    path: 'donors',
    component: DonorsComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
