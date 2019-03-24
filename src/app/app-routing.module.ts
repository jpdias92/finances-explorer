import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovementsComponent } from './movements/movements.component';
import { DonorsComponent } from './donors/donors.component';

const routes: Routes = [
  {
    path: 'movements',
    component: MovementsComponent
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
