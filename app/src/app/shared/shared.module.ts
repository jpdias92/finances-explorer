import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SideNavMenuComponent } from './side-nav-menu/side-nav-menu.component';
import { MaterialModule } from '../infrastructure/material/material.module';
import { MatDialogModule } from "@angular/material";
import { SideNavMenuService } from './services/side-nav-menu.service';
import { NotificationComponent } from './notification/notification.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [
    SideNavMenuComponent,
    NotificationComponent,
    ConfirmComponent
  ],
  declarations: [
    SideNavMenuComponent,
    NotificationComponent,
    ConfirmComponent
  ],
  providers: [
    SideNavMenuService,
    NotificationComponent
  ],
  entryComponents: [
    ConfirmComponent
  ]
})
export class SharedModule { }
