import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './infrastructure/material/material.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { MovementsComponent } from './movements/movements.component';
import { DonorsComponent } from './donors/donors.component';

@NgModule({
  declarations: [
    AppComponent,
    MovementsComponent,
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
