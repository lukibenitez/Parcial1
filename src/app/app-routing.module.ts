import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ProductoComponent } from './producto-detalle/producto.component';
import { ListadoJugadoresComponent } from './listado-jugadores/listado-jugadores.component';

const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'jugadores', component: ListaProductosComponent },
    { path: 'jugadores-detalle/:id', component: ProductoComponent },
    { path: 'listado-jugadores', component: ListadoJugadoresComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
