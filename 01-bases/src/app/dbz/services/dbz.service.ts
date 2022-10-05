import { Injectable } from "@angular/core"

@Injectable() 
/* El decorador que tienen los servicios es @Injectable() */
/* Significa que esta será una clase que se podrá "inyectar" */

/* Todos los datos deben estar centralizados en el servicio para ser usada por todos los componentes */
export class DBzService {
    constructor() {
        console.log("Servicio inicializado");
    }
}
