import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})

export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: "",
    poder: 0
  }

  personajeVacio: Personaje = {
    nombre: "",
    poder: 0
  }

  /* Con el decorador @Output emitimos un valor desde el elemento hijo al padre */
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); // Vamos a emitir una interfaz Personaje

  // En tecnologías antíguas usaríamos el preventDefault de esta manera para evitar que la página se refresque después de hacer submit
  agregarFormaAntigua(event: any) {
    event.preventDefault();
    console.log(event);
  }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0 || this.nuevo.poder === 0) { return; }

    // En este punto tendremos los datos del nuevo personaje, por lo que necesitaremos hacer la emisión del dato al componente padre
    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = this.personajeVacio;
  }

  cambiarNombre(event: any) {
    console.log(event.target.value);
  }

  cambiarPoder(event: any) {
    console.log(event.target.value);
  }
}
