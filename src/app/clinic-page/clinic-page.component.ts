import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SearchClinicMapComponent } from '../search-clinic-map/search-clinic-map.component';
import { ClinicService, Clinic } from '../services/clinic.service'; // Importar la interfaz Clinic y el servicio

@Component({
  selector: 'app-clinic-page',
  templateUrl: './clinic-page.component.html',
  styleUrls: ['./clinic-page.component.css'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, SearchClinicMapComponent],
  providers: [ClinicService]
})
export class ClinicPageComponent implements OnInit {
  clinic: Clinic | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private clinicService: ClinicService) {}

  ngOnInit(): void {
    const clinicName = this.route.snapshot.paramMap.get('name');
    this.clinic = this.clinicService.getClinics().find(clinic => clinic.name === clinicName);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
