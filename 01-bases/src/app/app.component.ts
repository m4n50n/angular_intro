// Importación del decorador Component
import { Component } from '@angular/core';

/**
 * Los decoradores de Angular JS es un modo de añadir metadatos a declaraciones de clase para ser usados por inyecciones de dependencia o compilaciones de directivas. 
 * Un decorador angular es una clase especial de declaración que puede acoplarse a una clase, método, propiedad o parámetro.
 */

/**
 * selector: Nombre del componente (este en concreto es el componente principal llamado en index.html)
 * 
 * templateUrl: Path del template HTML del componente
 * 
 * template: Permite definir un template HTML literal como por ejemplo:
 *    template: `<span>Hola</span>`
 * 
 * styles: Estilos literales, como por ejemplo:
 *    styles: ['h1 { font-weight: normal; }']
 * 
 * styleUrls: Los estilos se aplican desde un fichero externo como por ejemplo:
 *    styleUrls: ['./hero-app.component.css']
 */

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  template: `
    <span>Hola Mundo / Template literal</span>
  `, // Funcionará cuando no exista la propiedad templateUrl
  styleUrls: ['app.component.css']
})

export class AppComponent { }
