import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClinicMapComponent } from './search-clinic-map.component';

describe('SearchClinicMapComponent', () => {
  let component: SearchClinicMapComponent;
  let fixture: ComponentFixture<SearchClinicMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchClinicMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchClinicMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
