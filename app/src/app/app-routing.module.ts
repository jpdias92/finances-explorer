import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovementsListComponent } from './modules/movements/components/movements-list/movements-list.component';
import { MembersListComponent } from './modules/members/components/members-list/members-list.component';

const routes: Routes = [
  {
    path: 'movements',
    loadChildren: './modules/movements/movements.module#MovementsModule'
  },
  {
    path: 'members',
    loadChildren: './modules/members/members.module#MembersModule'
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
