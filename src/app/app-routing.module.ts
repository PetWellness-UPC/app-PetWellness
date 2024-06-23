import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaEPIC4Component } from './pagina-e-p-i-c4/pagina-e-p-i-c4.component';
import { ClinicPageComponent } from './clinic-page/clinic-page.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Home2Component } from './home2/home2.component';
import { PaginaEPIC3Component } from './pagina-e-p-i-c3/pagina-e-p-i-c3.component';
import { PaginaEPIC1Component } from './pagina-e-p-i-c1/pagina-e-p-i-c1.component';

const routes: Routes = [
  { path: 'clinic-detail/:name', component: ClinicPageComponent },
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'home2', component: Home2Component},
  { path: 'epic01-pagina-e-p-i-c3', component: PaginaEPIC3Component},
  {path: 'epic01-pagina-e-p-i-c1', component: PaginaEPIC1Component},
  { path: 'epic4', component: PaginaEPIC4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
