import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchClinicComponent } from './search-clinic/search-clinic.component';

const routes: Routes = [
  //{ path: 'search-clinic', component: SearchClinicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
