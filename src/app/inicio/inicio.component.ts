import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css'],
    animations: [
        trigger('fadeSlideInOut', [
            state('in', style({
                opacity: 1,
                transform: 'translateY(0)',
            })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateY(-50px)',
                }),
                animate('2s ease-out'),
            ]),
        ]),
    ],
})

export class InicioComponent {

}
