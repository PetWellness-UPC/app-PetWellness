import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClinicGridListComponent } from './search-clinic-grid-list.component';

describe('SearchClinicGridListComponent', () => {
  let component: SearchClinicGridListComponent;
  let fixture: ComponentFixture<SearchClinicGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchClinicGridListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchClinicGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
