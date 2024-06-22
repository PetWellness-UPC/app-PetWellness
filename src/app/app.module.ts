import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaEPIC4Component } from './pagina-e-p-i-c4/pagina-e-p-i-c4.component';
import { PaginaEPIC1Component } from './pagina-e-p-i-c1/pagina-e-p-i-c1.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Ajusta la ruta

import { MaterialModule } from './material/material.module';

import { SearchClinicMapComponent } from './search-clinic-map/search-clinic-map.component';
import { SearchClinicAutocompleteComponent } from './search-clinic-autocomplete/search-clinic-autocomplete.component';

import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatInputModule} from '@angular/material/input';

import { MatAutocompleteModule } from '@angular/material/autocomplete'; // Import MatAutocompleteModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchClinicMatCardComponent } from './search-clinic-mat-card/search-clinic-mat-card.component'; // Import MatFormFieldModule

import {MatGridListModule} from '@angular/material/grid-list';
import { SearchClinicGridListComponent } from './search-clinic-grid-list/search-clinic-grid-list.component';
import { ClinicPageComponent } from './clinic-page/clinic-page.component';

import { GoogleMapsModule } from '@angular/google-maps';

import { MatIconModule } from '@angular/material/icon';

import { ClinicService } from './services/clinic.service';


@NgModule({
  declarations: [
    AppComponent,
    PaginaEPIC4Component,
    PaginaEPIC1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,    
    SearchClinicMapComponent, // Importar el componente standalone
    SearchClinicAutocompleteComponent, // Importar el autocomplete component
    MatAutocompleteModule,
    MatFormFieldModule,
    SearchClinicMatCardComponent,
    MatGridListModule,
    SearchClinicGridListComponent,
    ClinicPageComponent,
    MatIconModule
  ],
  providers: [
    ClinicService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
