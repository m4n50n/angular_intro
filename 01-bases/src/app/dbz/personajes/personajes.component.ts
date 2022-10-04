import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})

export class PersonajesComponent { 
  /* @Input y @Output son decoradores que sirven para intercambiar datos entre componentes */
  @Input() personajes: Personaje[] = []; /* Con @Input() indicamos que el valor de la propiedad vendrá del componente padre (es decir, vendrá desde cualquier componente que llame a este componente) */  
  // @Input("data") personajes: any[] = []; // De esta forma, en este componente hijo, la propiedad personajes del padre se llamaría data en lugar de personajes, por lo que en este componente cuando quisieramos usar esta propiedad la tendríamos que usar como data
  // Además en el componente padre deberíamos hacer <app-personajes [data]="personajes"></app-personajes>
}
