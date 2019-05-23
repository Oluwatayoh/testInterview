import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { Section1Component } from './section1/section1.component';
import { TopbarComponent } from './section1/topbar/topbar.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { Section6Component } from './section6/section6.component';
import { Section7Component } from './section7/section7.component';
import { Section8Component } from './section8/section8.component';
import { Section9Component } from './section9/section9.component';
import { Section10Component } from './section10/section10.component';


@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    TopbarComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section7Component,
    Section8Component,
    Section9Component,
    Section10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
