import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'; // Importar AppComponent

@NgModule({
  imports: [
    BrowserModule,
    AppComponent // Importar AppComponent aquí
  ],
  providers: [],
  bootstrap: [AppComponent] // Usar AppComponent para bootstrap
})
export class AppModule { }

