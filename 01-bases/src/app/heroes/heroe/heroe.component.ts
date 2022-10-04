import { Component } from "@angular/core";

@Component({
    selector: "app-heroe",
    templateUrl: "heroe.component.html"
})

export class HeroeComponent {
    nombre: string = "Iron Man";
    edad: number = 45;

    /* Getter (no actúa como método - igual para los setters -) */
    get nombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }

    obtenerDescripcion(): string {
        return `${this.nombre} / Edad: ${this.edad} años.`;
    }

    cambiarNombre():void { // No se retornará nada (void)
        this.nombre = "Spiderman";
    }

    cambiarEdad():void {
        this.edad = 30;
    }
}
