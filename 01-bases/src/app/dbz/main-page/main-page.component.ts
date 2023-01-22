// Importaciones de Angular
import { Component } from '@angular/core';

// Interfaces
import { Personaje } from '../interfaces/dbz.interface';

// Servicios
import { DBzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  // Iniciamos nueva instancia del servicio de este módulo
  // Inyección de dependencias: Estaremos inyectando el servicio en este componente
  //constructor(private DBzService: DBzService) {}
  
  nuevo: Personaje = {
    nombre: "Maestro Roshi",
    poder: 20999
  }  

  // Comentarmos los siguiente porque finalmente usaremos el servicio para agregar el personaje, pero esta sería la manera correcta de ejecutar esta función con datos que vienen emitidos desde el componente hijo
  // agregarNuevoPersonaje(personajeRecibido: Personaje) {
  //   console.log("Personaje Recibido:", personajeRecibido);
  //   this.personajes.push(personajeRecibido);
  // }
}
