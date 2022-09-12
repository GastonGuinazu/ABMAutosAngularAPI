import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './head/head.component';
import { AutoComponent } from './auto/auto.component';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormsModule } from '@angular/forms';
import { AutoListComponent } from './auto/auto-list/auto-list.component';
import { AutoFormComponent } from './auto/auto-form/auto-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadComponent,
    AutoComponent,
    AutoListComponent,
    AutoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
