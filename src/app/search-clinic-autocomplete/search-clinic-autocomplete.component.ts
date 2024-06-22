import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ClinicService } from '../services/clinic.service';

export interface Clinic {
  name: string;
  address: string;
  description: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
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
  providers: [ClinicService]
})
export class SearchClinicAutocompleteComponent implements OnInit {
  @Output() searchResults = new EventEmitter<Clinic[]>();
  stateForm: FormGroup;
  clinics: Clinic[] = [];

  filteredClinics: Observable<Clinic[]> = of([]);

  constructor(private _formBuilder: FormBuilder, private clinicService: ClinicService) {
    this.stateForm = this._formBuilder.group({
      stateGroup: '',
    });
    this.clinics = this.clinicService.getClinics();
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
