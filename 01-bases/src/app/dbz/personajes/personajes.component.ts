import { Component, Input } from '@angular/core';

// Import de interfaces
import { Personaje } from '../interfaces/dbz.interface';

// Import de servicios
import { DBzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})

export class PersonajesComponent { 
  // En caso de que se instancie el servicio en un componente anterior, aquí ya no tendría efecto puesto que el servicio sólo se instanciará una sola vez por módulo
  constructor(private DBzService: DBzService) {}
  
  /* @Input y @Output son decoradores que sirven para intercambiar datos entre componentes */
  //@Input() personajes: Personaje[] = []; /* Con @Input() indicamos que el valor de la propiedad vendrá del componente padre (es decir, vendrá desde cualquier componente que llame a este componente) */  
  // @Input("data") personajes: any[] = []; // De esta forma, en este componente hijo, la propiedad personajes del padre se llamaría data en lugar de personajes, por lo que en este componente cuando quisieramos usar esta propiedad la tendríamos que usar como data
  // Además en el componente padre deberíamos hacer <app-personajes [data]="personajes"></app-personajes>

  get personajes() {
    return this.DBzService.personajes;
  }
}
