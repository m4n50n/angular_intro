// Importaciones de Angular
import { Component } from '@angular/core';

// Interfaces
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Vegeta",
      poder: 7500
    }
  ];

  nuevo: Personaje = {
    nombre: "Maestro Roshi",
    poder: 20999
  }

  agregarNuevoPersonaje(argumento: Personaje) {
    this.personajes.push(argumento);
  }
}
