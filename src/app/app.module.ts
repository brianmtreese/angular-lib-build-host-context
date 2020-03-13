import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibSampleModule } from 'lib-sample';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibSampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
