import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'epic01-pagina-e-p-i-c4',
  templateUrl: './pagina-e-p-i-c4.component.html',
  styleUrls: ['./pagina-e-p-i-c4.component.css'],
})
export class PaginaEPIC4Component implements OnInit {
  myControl = new FormControl('');
  clinics: any[] = [];
  allClinics: any[] = []; // Store all clinics
  isSearchActive = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadAllClinics();
  }

  onSearchResults(clinics: any[]) {
    this.clinics = clinics;
    this.isSearchActive = clinics.length < this.allClinics.length;
  }

  viewDetails(clinic: any) {
    this.router.navigate(['/clinic-detail', clinic.name]);
  }

  loadAllClinics() {
    this.clinics = [
      // Datos de las clínicas...
    ];
  }
}
