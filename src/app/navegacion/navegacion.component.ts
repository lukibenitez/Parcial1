import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

declare var $: any; // Declarar la variable jQuery
declare var document: any; // Declarar la variable document

@Component({
    selector: 'app-navegacion',
    templateUrl: './navegacion.component.html',
    styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent {

    mostrarCampoBusqueda = false;
    juegos: any[] = [];

    isNavOpen = true;

    // Define el punto de quiebre "lg" de Bootstrap
    lgBreakpoint = 992;

    textToSearch: string = "";

    @Output() sendTextToSearch = new EventEmitter<any>();

    // Agrega un event listener para detectar cambios en el tamaño de la ventana
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        // Verifica si la pantalla es "lg" o superior y ajusta el estado de la barra de navegación
        this.isNavOpen = window.innerWidth >= this.lgBreakpoint;
    }

    constructor() { }

    toggleCampoBusqueda() {
        this.mostrarCampoBusqueda = !this.mostrarCampoBusqueda;
    }

    handleChange(event: any) {
        this.textToSearch = event.target.value
        localStorage.setItem('filter', event.target.value)
        window.dispatchEvent(new Event('storage'))
        this.sendTextToSearch.emit(event.target.value)
    }


    ngOnInit(): void {
        // Encapsula el código en $(document).ready() para asegurarte de que se ejecute después de que se cargue el DOM
        $(document).ready(function () {
            const sidebar = document.querySelector(".sidebar");
            const closeBtn = document.querySelector("#btn");
            const searchBtn = document.querySelector(".bx-search");

            closeBtn.addEventListener("click", function () {
                sidebar.classList.toggle("open");
                menuBtnChange();
            });

            searchBtn.addEventListener("click", function () {
                sidebar.classList.toggle("open");
                menuBtnChange();
            });

            function menuBtnChange() {
                if (sidebar.classList.contains("open")) {
                    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
                } else {
                    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
                }
            }
        });
    }
}

