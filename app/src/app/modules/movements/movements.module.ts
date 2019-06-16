import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MovementsRoutingModule } from './movements-routing.module';
import { MaterialModule } from '../../infrastructure/material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { DatePipe } from '@angular/common'

import { MovementsListComponent } from './components/movements-list/movements-list.component';
import { MovementsInsertComponent} from './components/movements-insert/movements-insert.component';

import { MovementsService } from './services/movements.service';
import { CategoriesService } from './services/categories.service';
import { MAT_DATE_LOCALE } from '@angular/material';

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
    MovementsListComponent,
    MovementsInsertComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    MovementsService,
    CategoriesService,
    DatePipe
  ],
  entryComponents: [
    MovementsInsertComponent
  ],
})
export class MovementsModule { }
