import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {
  heroes: string[] = ["Spiderman", "Iron Man", "Thor", "Superman", "Capitán América"];
  heroeBorrado: string = "";

  borrarHeroe():void {
    console.log("Borrando...");    

    // shift() elimina el primer elemento del array    
    // Poniendo || "" significa que, en caso de obtener un undefined del shift() (en caso de que el array esté vacio, por ejemplo), retorne un string vacio ""
    this.heroeBorrado = this.heroes.shift() || "";
  }
}
