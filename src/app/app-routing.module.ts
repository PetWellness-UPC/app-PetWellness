import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaEPIC4Component } from './pagina-e-p-i-c4/pagina-e-p-i-c4.component';
import { ClinicPageComponent } from './clinic-page/clinic-page.component';

const routes: Routes = [
  { path: '', component: PaginaEPIC4Component },
  { path: 'clinic-detail/:name', component: ClinicPageComponent },
  // Otras rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
