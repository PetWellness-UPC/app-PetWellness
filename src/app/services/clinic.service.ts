import { Injectable } from '@angular/core';
import { Clinic } from '../search-clinic-autocomplete/search-clinic-autocomplete.component';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {
  private clinics: Clinic[] = [
    { name: 'San Francisco', address: 'Av. Brasil 1234, Jesús María, Lima', description: 'Especialistas en atención integral para mascotas.', imageUrl: 'https://via.placeholder.com/150', latitude: -12.076650, longitude: -77.049650 },
    { name: 'El Bosque', address: 'Calle Los Pinos 456, San Isidro, Lima', description: 'Ofrecemos servicios de urgencias las 24 horas.', imageUrl: 'https://via.placeholder.com/150', latitude: -12.098849, longitude: -77.032560 },
    { name: 'Vida Animal', address: 'Av. La Molina 789, La Molina, Lima', description: 'Cuidado y bienestar para su mascota.', imageUrl: 'https://via.placeholder.com/150', latitude: -12.091690, longitude: -76.961590 },
    { name: 'Pet Care', address: 'Jr. Junín 987, Miraflores, Lima', description: 'Servicios veterinarios con tecnología avanzada.', imageUrl: 'https://via.placeholder.com/150', latitude: -12.121850, longitude: -77.030530 },
    { name: 'Mascotas Felices', address: 'Av. Javier Prado 123, San Borja, Lima', description: 'Atención personalizada y profesional.', imageUrl: 'https://via.placeholder.com/150', latitude: -12.090590, longitude: -77.003890 },
    { name: 'Animalia', address: 'Av. Petit Thouars 456, Lince, Lima', description: 'Cuidado integral para sus mascotas.', imageUrl: 'https://via.placeholder.com/150', latitude: -12.087210, longitude: -77.028030 },
    { name: 'Salud Animal', address: 'Av. Angamos 789, Surquillo, Lima', description: 'Servicios de salud y bienestar para animales.', imageUrl: 'https://via.placeholder.com/150', latitude: -12.114500, longitude: -77.014820 },
    { name: 'Happy Pets', address: 'Calle San Martín 123, Barranco, Lima', description: 'La mejor atención para sus mascotas.', imageUrl: 'https://via.placeholder.com/150', latitude: -12.142700, longitude: -77.020910 },
    { name: 'Amor Animal', address: 'Av. Universitaria 456, San Miguel, Lima', description: 'Atención de calidad para sus mascotas.', imageUrl: 'https://via.placeholder.com/150', latitude: -12.066250, longitude: -77.082080 },
    { name: 'Los Olivos', address: 'Av. Antúnez de Mayolo 789, Los Olivos, Lima', description: 'Atención veterinaria de primera clase.', imageUrl: 'https://via.placeholder.com/150', latitude: -11.990450, longitude: -77.071230 },
    { name: 'San Marcos', address: 'Av. Alfredo Mendiola 123, San Martín de Porres, Lima', description: 'Servicios completos para el cuidado de su mascota.', imageUrl: 'https://via.placeholder.com/150', latitude: -12.023330, longitude: -77.053780 },
    { name: 'Pet Health', address: 'Av. Benavides 456, Santiago de Surco, Lima', description: 'Expertos en salud animal.', imageUrl: 'https://via.placeholder.com/150', latitude: -12.137500, longitude: -77.010630 },
    { name: 'La Casa del Animal', address: 'Av. La Marina 789, Pueblo Libre, Lima', description: 'Cuidado integral y amoroso.', imageUrl: 'https://via.placeholder.com/150', latitude: -12.083950, longitude: -77.070370 },
    { name: 'Cuidado Animal', address: 'Av. Tomás Marsano 123, Surquillo, Lima', description: 'Atención veterinaria personalizada.', imageUrl: 'https://via.placeholder.com/150', latitude: -12.122970, longitude: -77.017520 },
    { name: 'Vet Amigos', address: 'Av. Arenales 456, Lince, Lima', description: 'Amigos de sus mascotas.', imageUrl: 'https://via.placeholder.com/150', latitude: -12.071620, longitude: -77.033830 },
  ];

  getClinics(): Clinic[] {
    return this.clinics;
  }
}

export type { Clinic };
