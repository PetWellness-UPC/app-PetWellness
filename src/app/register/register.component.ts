import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  accountType: string = 'usuario';
  workPlace?: string ;
  showVerificationMessage: boolean = false;

  register() {
    
    this.showVerificationMessage = true;
  }
  toggleWorkPlaceField() {
 
  }
}
