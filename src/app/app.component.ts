import { Component } from '@angular/core';

/**
 * selector: Nombre del componente (componente principal llamado en index.html)
 * templateUrl: Path del template HTML del componente
 * template: Permite definir un template HTML literal como por ejemplo:
 *    template: `<span>Hola</span>`
 * styles: Estilos literales, como por ejemplo:
 *    styles: ['h1 { font-weight: normal; }']
 * styleUrls: Los estilos se aplican desde un fichero externo como por ejemplo:
 *    styleUrls: ['./hero-app.component.css']
 */

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})

export class AppComponent { }
