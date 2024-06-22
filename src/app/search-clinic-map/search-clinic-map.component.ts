import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-search-clinic-map',
  templateUrl: './search-clinic-map.component.html',
  styleUrls: ['./search-clinic-map.component.css'],
  standalone: true,
  imports: [GoogleMapsModule]
})
export class SearchClinicMapComponent implements OnInit, OnChanges {
  @Input() latitude: number = 0;
  @Input() longitude: number = 0;
  center!: google.maps.LatLngLiteral;
  zoom = 15;

  ngOnInit(): void {
    this.setCenter();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['latitude'] || changes['longitude']) {
      this.setCenter();
    }
  }

  private setCenter(): void {
    this.center = {
      lat: this.latitude,
      lng: this.longitude
    };
  }
}
