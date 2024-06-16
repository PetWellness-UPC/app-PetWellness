import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaEPIC1Component } from './pagina-e-p-i-c1/pagina-e-p-i-c1.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Ajusta la ruta

import { MaterialModule } from './material/material.module';
import { SearchClinicComponent } from './search-clinic/search-clinic.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaEPIC1Component,
    SearchClinicComponent // Declara tu componente aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
