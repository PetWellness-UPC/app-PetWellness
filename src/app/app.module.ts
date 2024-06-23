import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { Home2Component } from './home2/home2.component';
import {PaginaEPIC3Component} from './pagina-e-p-i-c3/pagina-e-p-i-c3.component'
import { PaginaEPIC1Component } from './pagina-e-p-i-c1/pagina-e-p-i-c1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    Home2Component,
    PaginaEPIC3Component,
    PaginaEPIC1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
