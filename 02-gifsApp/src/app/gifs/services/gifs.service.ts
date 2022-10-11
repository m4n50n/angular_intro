import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

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

  public resultados: Gif[] = []; // La interface Gif la hemos extraido de la misma manera que SearchGifsResponse (a la hora de llamar al endpoint con get -más abajo en este fichero-)

  get historial() {    
    return [...this._historial]; // Devolvemos un nuevo array copia del original para así eliminar la referencia al mismo
  }

  constructor(private http: HttpClient) { // Inicio de instancia para hacer peticiones HTTP. Esto trabajará con observables y no con promesas.
    // En caso de ser nulo será un array vacio (|| [])
    this._historial = JSON.parse(localStorage.getItem("historial")!) || []; // Al poner ! al final forzamos a que Angular no considere que este campo va a ser null (que es el error que da) puesto que ya hacemos la validación nosotros mismos con el if
    this.resultados = JSON.parse(localStorage.getItem("resultados")!) || [];
  } 

  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();

    // Comprobar si el valor ya existe en el historial y si no, se inserta
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10); // Esto cortará el array para mostrar sólo 10 resultados (del 0 -primero- al 10)

      localStorage.setItem("historial", JSON.stringify(this._historial));
    }
    
    console.log(this._historial);

    // Fetch típico
    /* fetch("https://api.giphy.com/v1/gifs/search?api_key=9DvXwP7Pjt9yMXqcHdLFZlvNsaCBa7u6&q=dragon ball z&limit=10").then(respuesta=> {
      respuesta.json().then(datos=>{console.log(datos);})
    }) */

    // Fetch con HttpClientModule
    // En https://quicktype.io/ podemos copiar todo el JSON de la respuesta (desde postman por ejemplo) y obtener las interfaces ya creadas
    // Como el get es de tipo genérico podemos asignarle la interfaz que va a devolver
    // Se interpretaría como que get va a traer una información y esa información va a tener el formato de la interfaz SearchGifsResponse
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
      .subscribe((respuesta) => { // Aquí respuesta no tiene tipado porque ya hemos puesto el genérico en la línea de arriba
        console.log(respuesta);
        this.resultados = respuesta.data;
        localStorage.setItem("resultados", JSON.stringify(this.resultados));
      }) // suscribe() se ejecutará cuando obtengamos la resolución del get(), de forma parecida al then()
  }
}
