import { Component } from '@angular/core';

/**
 * selector: Nombre del componente (componente principal llamado en index.html)
 * templateUrl: Path del template HTML del componente
 * template: Permite definir un template HTML literal como por ejemplo:
 *  template: `<span>Hola</span>`
 */

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"  
})

export class AppComponent {
  titulo: string = "Contador App";
  numero: number = 0;
  base: number = 5;

  operar(num: number) {
    this.numero += num;
  }
}
