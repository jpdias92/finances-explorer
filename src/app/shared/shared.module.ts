import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SideNavMenuComponent } from './side-nav-menu/side-nav-menu.component';
import { MaterialModule } from '../infrastructure/material/material.module';
import { SideNavMenuService } from './services/side-nav-menu.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [
    SideNavMenuComponent,
  ],
  declarations: [
    SideNavMenuComponent,
  ],
  providers: [
    SideNavMenuService,
  ]
})
export class SharedModule { }
