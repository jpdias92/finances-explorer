import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MovementsRoutingModule } from './movements-routing.module';
import { MaterialModule } from '../../infrastructure/material/material.module';
import { SharedModule } from '../../shared/shared.module';

import { MovementsListComponent } from './components/movements-list/movements-list.component';

import { MovementsService } from './services/movements.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MovementsRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    MovementsListComponent
  ],
  providers: [
    MovementsService
  ],
})
export class MovementsModule { }