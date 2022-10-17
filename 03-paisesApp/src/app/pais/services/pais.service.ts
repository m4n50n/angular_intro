import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = "https://restcountries.com/v3.1/";

  constructor(private http: HttpClient) { }
  
  buscarPais(termino:string): Observable<any> {
    return this.http.get(`${this.apiUrl}/name/${termino}`); // No llamamos a suscribe(); Esto regresa un <Observable> (podemos verlo situando el cursor encima de get)
  }
}
