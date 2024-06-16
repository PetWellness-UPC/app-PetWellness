import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {GoogleMap, MapDirectionsRenderer, MapHeatmapLayer, MapTrafficLayer} from "@angular/google-maps";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatAutocompleteModule,
    MatButtonModule,
    GoogleMap,
    MapDirectionsRenderer,
    MapHeatmapLayer,
    MapTrafficLayer
  ],
  exports: [
    MatCardModule,
    MatAutocompleteModule,
    MatButtonModule,
    GoogleMap,
    MapDirectionsRenderer,
    MapHeatmapLayer,
    MapTrafficLayer
  ]
})
export class MaterialModule { }
