import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MembersRoutingModule } from './members-routing.module';
import { MaterialModule } from '../../infrastructure/material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { DatePipe } from '@angular/common'

import { MembersListComponent } from './components/members-list/members-list.component';
import { MembersInsertComponent} from './components/members-insert/members-insert.component';

import { MembersService } from './services/members.service';
import { MAT_DATE_LOCALE } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MembersRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    MembersListComponent,
    MembersInsertComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    MembersService,
    DatePipe
  ],
  entryComponents: [
    MembersInsertComponent
  ],
})
export class MembersModule { }
