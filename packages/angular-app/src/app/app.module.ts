import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreComponentsAngularModule } from '@bongaui/core-components-angular';
import { defineCustomElements } from '@bongaui/core-components/loader';
defineCustomElements();

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreComponentsAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
