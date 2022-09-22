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
  nuevo: Personaje = {
    nombre: "Trunks",
    poder: 14000 
  }

  // En tecnolog�as ant�guas usar�amos el preventDefault de esta manera para evitar que la p�gina se refresque despu�s de hacer submit
  agregarFormaAntigua(event: any) {
    event.preventDefault();
    console.log(event);
  }

  agregar() {
    console.log(this.nuevo);
  }

  cambiarNombre(event: any) {
    console.log(event.target.value);
  }

  cambiarPoder(event: any) {
    console.log(event.target.value);
  }
}
