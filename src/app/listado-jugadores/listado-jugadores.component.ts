import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jugador } from '../jugador';
import { JUGADORES } from '../Api/mock';

@Component({
    selector: 'app-listado-jugadores',
    templateUrl: './listado-jugadores.component.html',
    styleUrls: ['./listado-jugadores.component.css']
})
export class ListadoJugadoresComponent implements OnInit {

    jugadores: Jugador[] = [];

    ngOnInit() {
        this.jugadores = JUGADORES;
    }
}
