import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export interface Clinic {
  name: string;
  address: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'search-clinic-autocomplete',
  templateUrl: './search-clinic-autocomplete.component.html',
  styleUrls: ['./search-clinic-autocomplete.component.css'],
  encapsulation: ViewEncapsulation.None, // Disable encapsulation to allow global styles
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    AsyncPipe,
  ],
})
export class SearchClinicAutocompleteComponent implements OnInit {
  @Output() searchResults = new EventEmitter<Clinic[]>();
  stateForm: FormGroup;
  clinics: Clinic[] = [
    { name: 'San Francisco', address: 'Av. Brasil 1234, Jesús María, Lima', description: 'Especialistas en atención integral para mascotas.', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'El Bosque', address: 'Calle Los Pinos 456, San Isidro, Lima', description: 'Ofrecemos servicios de urgencias las 24 horas.', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Vida Animal', address: 'Av. La Molina 789, La Molina, Lima', description: 'Cuidado y bienestar para su mascota.', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Pet Care', address: 'Jr. Junín 987, Miraflores, Lima', description: 'Servicios veterinarios con tecnología avanzada.', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Mascotas Felices', address: 'Av. Javier Prado 123, San Borja, Lima', description: 'Atención personalizada y profesional.', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Animalia', address: 'Av. Petit Thouars 456, Lince, Lima', description: 'Cuidado integral para sus mascotas.', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Salud Animal', address: 'Av. Angamos 789, Surquillo, Lima', description: 'Servicios de salud y bienestar para animales.', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Happy Pets', address: 'Calle San Martín 123, Barranco, Lima', description: 'La mejor atención para sus mascotas.', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Amor Animal', address: 'Av. Universitaria 456, San Miguel, Lima', description: 'Atención de calidad para sus mascotas.', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Los Olivos', address: 'Av. Antúnez de Mayolo 789, Los Olivos, Lima', description: 'Atención veterinaria de primera clase.', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'San Marcos', address: 'Av. Alfredo Mendiola 123, San Martín de Porres, Lima', description: 'Servicios completos para el cuidado de su mascota.', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Pet Health', address: 'Av. Benavides 456, Santiago de Surco, Lima', description: 'Expertos en salud animal.', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'La Casa del Animal', address: 'Av. La Marina 789, Pueblo Libre, Lima', description: 'Cuidado integral y amoroso.', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Cuidado Animal', address: 'Av. Tomás Marsano 123, Surquillo, Lima', description: 'Atención veterinaria personalizada.', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Vet Amigos', address: 'Av. Arenales 456, Lince, Lima', description: 'Amigos de sus mascotas.', imageUrl: 'https://via.placeholder.com/150' },
  ];

  filteredClinics: Observable<Clinic[]> = of([]);

  constructor(private _formBuilder: FormBuilder) {
    this.stateForm = this._formBuilder.group({
      stateGroup: '',
    });
  }

  ngOnInit() {
    // Emit all clinics initially
    this.searchResults.emit(this.clinics);

    this.filteredClinics = this.stateForm.get('stateGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterClinics(value || '')),
    );

    this.filteredClinics.subscribe(clinics => {
      this.searchResults.emit(clinics.slice(0, 9));
    });
  }

  private _filterClinics(value: string): Clinic[] {
    const filterValue = value.toLowerCase();
    return this.clinics.filter(clinic => clinic.name.toLowerCase().includes(filterValue));
  }
}
