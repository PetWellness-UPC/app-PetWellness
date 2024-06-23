import { Component } from '@angular/core';

@Component({
  selector: 'app-pago-usuario-vip',
  templateUrl: './pago-usuario-vip.component.html',
  styleUrl: './pago-usuario-vip.component.css'
})
export class PagoUsuarioVipComponent {
  pagoRealizado: boolean = false;

  realizarPago() {
    // Aquí podrías realizar alguna lógica adicional de pago si fuera necesario

    // Simulando un tiempo de carga o proceso
    setTimeout(() => {
      this.pagoRealizado = true;
    }, 2000); // Ejemplo de 2 segundos de carga antes de mostrar el mensaje
  }
}

