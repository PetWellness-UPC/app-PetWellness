import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClinicMatCardComponent } from './search-clinic-mat-card.component';

describe('SearchClinicMatCardComponent', () => {
  let component: SearchClinicMatCardComponent;
  let fixture: ComponentFixture<SearchClinicMatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchClinicMatCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchClinicMatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
