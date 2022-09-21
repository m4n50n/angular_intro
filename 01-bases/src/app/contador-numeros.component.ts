/**
 * Este objeto lo hemos creado manualmente
 * Para ello:
 *  1. Creación del fichero contador.component.ts 
 *      contador -> Nombre del componente
 *      component -> Tipo de objeto (componente en este caso)
 *      ts -> Extensión de fichero TypeScript
 *  2. Importar Component (decorador) para poder definir las propiedades del componente
 *  3. Crear clase (definición del componente)
 */

import { Component } from '@angular/core';

@Component({
    selector: "app-contador",
    templateUrl: "contador-numeros.component.html"
})

export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 0;
    base: number = 5;

    operar(num: number) {
        this.numero += num;
    }
}
