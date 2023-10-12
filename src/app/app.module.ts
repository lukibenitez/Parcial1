import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ProductoComponent } from './producto-detalle/producto.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoJugadoresComponent } from './listado-jugadores/listado-jugadores.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    ProductoComponent,
    NavegacionComponent,
    InicioComponent,
    ListadoJugadoresComponent,
  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
