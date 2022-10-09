import { Injectable } from '@angular/core';

@Injectable({
  // Definición global de servicios:
  providedIn: 'root' // Esta característica evita que tengamos que definir este servicio como provider del módulo, haciendo que el servicio sea visible a nivel global
})

/* Orden aconsejado de elementos:
1. Propiedades
2. Getters y setters
3. Constructor
4. Métodos */
export class GifsService {
  private _historial: string[] = [];

  get historial() {
    return [...this._historial]; // Devolvemos un nuevo array copia del original para así eliminar la referencia al mismo
  }

  buscarGifs(query: string) {
    this._historial.unshift(query);
    console.log(this._historial);
  }
}
