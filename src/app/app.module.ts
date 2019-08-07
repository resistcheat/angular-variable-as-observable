import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule
} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './filter/filter.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
