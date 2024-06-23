import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pago-usuario-vip',
  templateUrl: './pago-usuario-vip.component.html',
  styleUrl: './pago-usuario-vip.component.css'
})
export class PagoUsuarioVipComponent {
  constructor(private router: Router) {}
  pagoRealizado: boolean = false;
  nombre: string = '';
  email: string = '';
  tarjeta: string = '';
  fechaExpiracion: string = '';
  cvv: string = '';

  goBack(): void {
    this.router.navigate(['/precios']);
  }
  
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

