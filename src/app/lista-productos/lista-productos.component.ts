import { Component, OnInit } from '@angular/core';
import { Jugador } from '../jugador';
import { JUGADORES } from '../Api/mock';


@Component({
    selector: 'app-lista-productos',
    templateUrl: './lista-productos.component.html',
    styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

    jugadores: Jugador[] = JUGADORES;

    // jugadores: any[] = [];
    contadorId = 1;

    posicionesValidas: string[] = ['delantero', 'mediocampista', 'defensa', 'arquero'];

    nombre: string = '';
    posicion: string = '';
    mensajeError: string = '';

    constructor() { }

    agregarJugador(nombre: string, posicion: string) {


        if (!nombre || !posicion) {
            if (!nombre) {
                this.mensajeError = 'Por favor, ingresa el nombre.';
            }
            if(!posicion){
                this.mensajeError = 'Por favor, ingresa la posición.';
            }
            if((!nombre) && (!posicion)) {
                this.mensajeError = 'Por favor, ingresa el nombre y la posición.';
            }
        } else if (this.jugadores.length < 23) {
            // Genera una nueva URL de imagen para cada jugador (puedes personalizar esto según tus necesidades)
            let imagenURL = '';
            switch (posicion) {
                case 'delantero':
                    imagenURL = '../../assets/image/imagen_1.jpg';
                    break;
                case 'mediocampista':
                    imagenURL = '../../assets/image/imagen_2.jpg';
                    break;
                case 'defensa':
                    imagenURL = '../../assets/image/imagen_3.jpg';
                    break;
                case 'arquero':
                    imagenURL = '../../assets/image/imagen_4.jpeg';
                    break;
            }
            // Agrega el nuevo jugador a la lista
            this.jugadores.push({
                id: this.contadorId,
                nombre,
                posicion,
                imagenURL
            });
    
            // Incrementa el contador de ID para el siguiente jugador
            this.contadorId++;
    
            // Limpia los campos de entrada
            this.nombre = '';
            this.posicion = '';
        } else {
            this.mensajeError = 'Ya has alcanzado el límite de jugadores (23).';
        }

        setTimeout(() => {
            this.mensajeError = '';
        }, 3000);
    }

    borrarJugador(id: number) {
        // Encuentra el índice del jugador en la lista
        const index = this.jugadores.findIndex(jugador => jugador.id === id);
    
        if (index !== -1) {
            const jugadorAEliminar = this.jugadores[index];
    
            // Verifica si el jugador a eliminar es el último jugador en su posición
            if (this.esUltimoJugadorEnPosicion(jugadorAEliminar)) {
                // Muestra una notificación que indica que debe haber al menos un jugador de esa posición
                this.mensajeError = 'Debes tener al menos un jugador en la posición. ';
            } else {
                // Elimina el jugador del arreglo
                this.jugadores.splice(index, 1);
            }
        }

        setTimeout(() => {
            this.mensajeError = '';
        }, 3000);
    }
    
    // Función para verificar si el jugador es el último en su posición
    esUltimoJugadorEnPosicion(jugador: Jugador): boolean {
        const jugadoresMismaPosicion = this.jugadores.filter(j => j.posicion === jugador.posicion);
        return jugadoresMismaPosicion.length === 1;
    }

    getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    ngOnInit() {

    }
}


