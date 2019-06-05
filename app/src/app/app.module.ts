import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './infrastructure/material/material.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
// import { MovementsListComponent } from './modules/movements/components/movements-list/movements-list.component';
import { DonorsComponent } from './modules/donors/donors.component';

@NgModule({
  declarations: [
    AppComponent,
    // MovementsListComponent,
    DonorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
