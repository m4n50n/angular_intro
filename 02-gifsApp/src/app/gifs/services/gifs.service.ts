import { HttpClient } from '@angular/common/http';
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
  // https://developers.giphy.com/docs/api/endpoint#search
  private apiKey: string = "9DvXwP7Pjt9yMXqcHdLFZlvNsaCBa7u6";
  private _historial: string[] = [];

  get historial() {    
    return [...this._historial]; // Devolvemos un nuevo array copia del original para así eliminar la referencia al mismo
  }

  constructor(private http: HttpClient) {} // Inicio de instancia para hacer peticiones HTTP. Esto trabajará con observables y no con promesas.

  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();

    // Comprobar si el valor ya existe en el historial y si no, se inserta
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10); // Esto cortará el array para mostrar sólo 10 resultados (del 0 -primero- al 10)
    }
    
    console.log(this._historial);

    // Fetch típico
    /* fetch("https://api.giphy.com/v1/gifs/search?api_key=9DvXwP7Pjt9yMXqcHdLFZlvNsaCBa7u6&q=dragon ball z&limit=10").then(respuesta=> {
      respuesta.json().then(datos=>{console.log(datos);})
    }) */

    // Fetch con HttpClientModule
    this.http.get("https://api.giphy.com/v1/gifs/search?api_key=9DvXwP7Pjt9yMXqcHdLFZlvNsaCBa7u6&q=dragon ball z&limit=10")
      .subscribe((respuesta: any) => {
        console.log(respuesta);
      }) // suscribe() se ejecutará cuando obtengamos la resolución del get(), de forma parecida al then()
  }
}
