import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JUGADORES } from '../Api/mock';
import { Jugador } from '../jugador'; // Importa la interfaz desde el archivo 'producto'

@Component({
    selector: 'app-producto',
    templateUrl: './producto.component.html',
    styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
    jugador: Jugador | undefined;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        // Obtén el 'id' del producto de los parámetros de la ruta
        this.route.paramMap.subscribe((params) => {
            const id = params.get('id');

            if (id !== null) {
                // Convierte el 'id' a un número si no es nulo
                const jugadorId = +id;

                // Busca el producto con el 'id' correspondiente en la lista de productos
                this.jugador = JUGADORES.find((jugador) => jugador.id === jugadorId);
            }
        });
    }
}
