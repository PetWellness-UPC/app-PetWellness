import { Component } from '@angular/core';

@Component({
  selector: 'app-pago-veterinario',
  templateUrl: './pago-veterinario.component.html',
  styleUrl: './pago-veterinario.component.css'
})
export class PagoVeterinarioComponent {
  pagoRealizado: boolean = false;
  nombre: string = '';
  email: string = '';
  tarjeta: string = '';
  fechaExpiracion: string = '';
  cvv: string = '';

  realizarPago() {
    if (this.nombre.trim() !== '' &&
        this.email.trim() !== '' &&
        this.tarjeta.trim() !== '' &&
        this.fechaExpiracion.trim() !== '' &&
        this.cvv.trim() !== '') {
      
      setTimeout(() => {
        this.pagoRealizado = true;
      }, 2000);
      
    } else {
      console.log('Por favor completa todos los campos requeridos.');
    }
  }
}
