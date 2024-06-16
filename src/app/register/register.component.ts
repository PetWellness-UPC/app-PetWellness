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
    if (this.name.trim() !== '' && this.email.trim() !== '' && this.password.trim() !== '') {
      
      this.showVerificationMessage = true;
    } else {
     
      console.log('Por favor completa todos los campos requeridos.');
    }
  }
  toggleWorkPlaceField() {
 
  }
}
