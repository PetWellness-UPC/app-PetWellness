import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreciosComponent } from './precios/precios.component';
import { PagoUsuarioVipComponent } from './pago-usuario-vip/pago-usuario-vip.component';
import { PagoVeterinarioComponent } from './pago-veterinario/pago-veterinario.component';

const routes: Routes = [
  { path: '', redirectTo: '/precios', pathMatch: 'full' },
  { path: 'pago-usuario-vip', component: PagoUsuarioVipComponent },
  { path: 'pago-veterinario', component: PagoVeterinarioComponent },
  { path: 'precios', component: PreciosComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
