import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-search-clinic-mat-card',
  templateUrl: './search-clinic-mat-card.component.html',
  styleUrl: './search-clinic-mat-card.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchClinicMatCardComponent {}