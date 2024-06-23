import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreciosComponent } from './precios/precios.component';
import { PagoUsuarioVipComponent } from './pago-usuario-vip/pago-usuario-vip.component';
import { PagoVeterinarioComponent } from './pago-veterinario/pago-veterinario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PreciosComponent,
    PagoUsuarioVipComponent,
    PagoVeterinarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
