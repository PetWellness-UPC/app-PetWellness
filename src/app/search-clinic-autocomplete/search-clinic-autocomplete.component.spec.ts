import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClinicAutocompleteComponent } from './search-clinic-autocomplete.component';

describe('SearchClinicAutocompleteComponent', () => {
  let component: SearchClinicAutocompleteComponent;
  let fixture: ComponentFixture<SearchClinicAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchClinicAutocompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchClinicAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
