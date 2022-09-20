// Importación del decorador Component
import { Component } from '@angular/core';

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

export class AppComponent {
  titulo: string = 'Contador App';
  numero: number = 0;
  base: number = 5;

  operar(num: number) {
    this.numero += num;
  }
}
