import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PagoVeterinarioRequest } from '../interfaces/pago-veterinario-request.interface';
import { PagoVeterinarioResponse } from '../interfaces/pago-veterinario-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PagoVeterinarioService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  realizarPago(pagoData: PagoVeterinarioRequest): Observable<PagoVeterinarioResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<PagoVeterinarioResponse>(`${this.baseUrl}/PagoVeterinario`, pagoData, { headers });
  }
}
