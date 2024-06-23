import {Component} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

/**
 * @title Basic grid-list
 */
@Component({
  selector: 'app-search-clinic-grid-list',
  templateUrl: './search-clinic-grid-list.component.html',
  styleUrl: './search-clinic-grid-list.component.css',
  standalone: true,
  imports: [MatGridListModule],
})
export class SearchClinicGridListComponent {}