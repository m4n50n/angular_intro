// Importaciones de Angular
import { Component, OnInit } from '@angular/core';

// Interfaces
interface Personaje {
  nombre: string,
  poder: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  personajeVacio: Personaje = {
    nombre: "",
    poder: 0
  }

  nuevo: Personaje = {
    nombre: "",
    poder: 0
  }

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

  // En tecnolog�as ant�guas usar�amos el preventDefault de esta manera para evitar que la p�gina se refresque despu�s de hacer submit
  agregarFormaAntigua(event: any) {
    event.preventDefault();
    console.log(event);
  }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; }

    this.personajes.push(this.nuevo);
    this.nuevo = this.personajeVacio;
  }

  cambiarNombre(event: any) {
    console.log(event.target.value);
  }

  cambiarPoder(event: any) {
    console.log(event.target.value);
  }
}
