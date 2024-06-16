import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchClinicMapComponent } from './search-clinic-map/search-clinic-map.component';

const routes: Routes = [
  //{ path: 'search-clinic', component: SearchClinicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
