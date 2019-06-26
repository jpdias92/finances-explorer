import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../../infrastructure/material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { DatePipe } from '@angular/common'

import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    DatePipe
  ]
})
export class DashboardModule { }
