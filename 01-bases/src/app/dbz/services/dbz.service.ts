import { Injectable } from "@angular/core"

// Interfaces
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
/* El decorador que tienen los servicios es @Injectable() */
/* Significa que esta será una clase que se podrá "inyectar" */

/* Todos los datos deben estar centralizados en el servicio para ser usada por todos los componentes */
export class DBzService {
    constructor() {
        console.log("Servicio inicializado");
    }

    private _personajes: Personaje[] = [
        {
            nombre: "Goku",
            poder: 15000
        },
        {
            nombre: "Vegeta",
            poder: 7500
        }
    ];

    // Por seguridad, dejamos la variable principal _personajes como privada y accedemos a ella a través de un getter que devuelve un array nuevo
    get personajes(): Personaje[] {
        // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        return [...this._personajes]; // De esta forma se "rompe" la referencia con _personajes y envía un array nuevo
    }
}
