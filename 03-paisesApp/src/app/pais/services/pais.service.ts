import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = "https://restcountries.com/v3.1/";

  constructor(private http: HttpClient) { }
  
  // El endpoint devolverá un array de paises que coincidan con el término de búsqueda
  buscarPais(termino:string): Observable<Country[]> { // Retornará un arreglo de Country (interfaz)
    return this.http.get<Country[]>(`${this.apiUrl}/name/${termino}`); // No llamamos a suscribe(); Esto regresa un <Observable> (podemos verlo situando el cursor encima de get)
  }
}
