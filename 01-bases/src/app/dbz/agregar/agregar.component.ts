import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})

export class AgregarComponent {
  /* Con @Input() indicamos que el valor de la propiedad vendrá del componente padre (es decir, vendrá desde cualquier componente que llame a este componente) */  
  @Input() personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: "",
    poder: 0
  }

  personajeVacio: Personaje = {
    nombre: "",
    poder: 0
  }

  // En tecnologías antíguas usaríamos el preventDefault de esta manera para evitar que la página se refresque después de hacer submit
  agregarFormaAntigua(event: any) {
    event.preventDefault();
    console.log(event);
  }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0 || this.nuevo.poder === 0) { return; }

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
