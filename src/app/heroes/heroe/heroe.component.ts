import { Component } from "@angular/core";


@Component({
    selector: "app-heroe",
    templateUrl: "heroe.component.html"
})

export class HeroeComponent {
    nombre: string = "Iron Man";
    edad: number = 45;

    get nombreCapitalizado() { /* Getter */
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} / Edad: ${this.edad} años.`
    }
}
