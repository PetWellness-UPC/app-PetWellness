import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PagoUsuarioVipRequest } from '../interfaces/pago-usuario-request.interface';
import { PagoUsuarioVipResponse } from '../interfaces/pago-usuario-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PagoUsuarioIpService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  realizarPago(pagoData: PagoUsuarioVipRequest): Observable<PagoUsuarioVipResponse> {
    const url = `${this.baseUrl}/PagoUsuarioVIP`;
    return this.http.post<PagoUsuarioVipResponse>(url, pagoData);
  }
}
