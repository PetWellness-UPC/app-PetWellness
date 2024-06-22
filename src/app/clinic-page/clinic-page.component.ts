import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchClinicMapComponent } from '../search-clinic-map/search-clinic-map.component';

interface Clinic {
  name: string;
  address: string;
  description: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-clinic-page',
  templateUrl: './clinic-page.component.html',
  styleUrls: ['./clinic-page.component.css'],
  standalone: true,
  imports: [CommonModule, SearchClinicMapComponent]
})
export class ClinicPageComponent implements OnInit {
  clinic: Clinic = {
    name: '',
    address: '',
    description: '',
    imageUrl: '',
    latitude: 0,
    longitude: 0
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const clinicName = this.route.snapshot.paramMap.get('name')!;
    // Aquí podrías cargar más datos de la clínica desde un servicio
    // Para este ejemplo, usaremos datos estáticos
    this.clinic = {
      name: clinicName,
      address: 'Av. Brasil 1234, Jesús María, Lima',
      description: 'Especialistas en atención integral para mascotas.',
      imageUrl: 'https://via.placeholder.com/150',
      latitude: -12.046374,
      longitude: -77.042793
    };
  }
}
