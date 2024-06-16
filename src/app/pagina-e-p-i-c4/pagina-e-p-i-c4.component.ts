import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'epic01-pagina-e-p-i-c4',
  templateUrl: './pagina-e-p-i-c4.component.html',
  styleUrls: ['./pagina-e-p-i-c4.component.css'],
})
export class PaginaEPIC4Component implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}
