import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";

import { MatLabel, MatFormField} from '@angular/material/form-field';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {GoogleMap, MapDirectionsRenderer, MapHeatmapLayer, MapTrafficLayer} from "@angular/google-maps";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatCard,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatAutocompleteModule,
    MatButtonModule,
    GoogleMap,
    MapDirectionsRenderer,
    MapHeatmapLayer,
    MapTrafficLayer,
    MatLabel,
    MatFormField
  ],
  exports: [
    MatCardModule,
    MatCard,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatAutocompleteModule,
    MatButtonModule,
    GoogleMap,
    MapDirectionsRenderer,
    MapHeatmapLayer,
    MapTrafficLayer,
    MatLabel,
    MatFormField
  ]
})
export class MaterialModule { }
