import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrl: './precios.component.css'
})
export class PreciosComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}

