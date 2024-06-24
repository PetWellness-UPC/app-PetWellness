import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PagoUsuarioIpService } from './services/pago-usuario-ip.service';
import { PagoUsuarioVipRequest } from './interfaces/pago-usuario-request.interface';
import { PagoUsuarioVipResponse } from './interfaces/pago-usuario-response.interface';

@Component({
  selector: 'app-pago-usuario-vip',
  templateUrl: './pago-usuario-vip.component.html',
  styleUrls: ['./pago-usuario-vip.component.css']
})
export class PagoUsuarioVipComponent {
  constructor(private router: Router, private pagoUsuarioIpService: PagoUsuarioIpService) {}
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
      const pagoData: PagoUsuarioVipRequest = {
        name: this.nombre,
        email: this.email,
        NumeroTarjeta: this.tarjeta,
        EXP: this.fechaExpiracion,
        CVV: this.cvv
      };

      this.pagoUsuarioIpService.realizarPago(pagoData).subscribe({
        next: (response: PagoUsuarioVipResponse) => {
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
