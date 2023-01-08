import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejemplo1Component } from './pages/ejemplo1/ejemplo1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IesaCommunitiesSelectorModule } from 'iesa-communities-selector';

@NgModule({
  declarations: [
    AppComponent,
    Ejemplo1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IesaCommunitiesSelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
