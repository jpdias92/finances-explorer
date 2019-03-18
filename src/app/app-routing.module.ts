import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataComponent } from './data/data.component';
import { DonorsComponent } from './donors/donors.component';

const routes: Routes = [
  {
    path: 'data',
    component: DataComponent
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
