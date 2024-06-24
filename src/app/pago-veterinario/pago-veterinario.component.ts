import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PagoVeterinarioService } from './services/pago-veterinario.service';
import { PagoVeterinarioRequest } from './interfaces/pago-veterinario-request.interface';
import { PagoVeterinarioResponse } from './interfaces/pago-veterinario-response.interface';

@Component({
  selector: 'app-pago-veterinario',
  templateUrl: './pago-veterinario.component.html',
  styleUrls: ['./pago-veterinario.component.css']
})
export class PagoVeterinarioComponent {
  constructor(private router: Router, private pagoVeterinarioService: PagoVeterinarioService) {}
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
    if (this.validarCampos()) {
      const pagoData: PagoVeterinarioRequest = {
        name: this.nombre,
        email: this.email,
        NumeroTarjeta: this.tarjeta,
        EXP: this.fechaExpiracion,
        CVV: this.cvv
      };

      this.pagoVeterinarioService.realizarPago(pagoData).subscribe({
        next: (response: PagoVeterinarioResponse) => {
          console.log('Pago generado con éxito', response);
          this.pagoRealizado = true;
        },
        error: (error) => {
          console.error('Error al realizar el pago:', error);
        }
      });
    } else {
      console.log('Por favor completa todos los campos requeridos.');
    }
  }

  validarCampos(): boolean {
    return (
      this.nombre.trim() !== '' &&
      this.email.trim() !== '' &&
      this.tarjeta.trim() !== '' &&
      this.fechaExpiracion.trim() !== '' &&
      this.cvv.trim() !== ''
    );
  }
}
