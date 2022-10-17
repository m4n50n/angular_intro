import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    img {
      max-height: 25px;
    }
  `]
})
export class PorPaisComponent {
  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar():void {
    this.hayError = false;
    console.log(this.termino);

    // Nos suscribimos aquí y no en el servicio.
    this.paisService.buscarPais(this.termino)
    .subscribe((paises) => {
      this.paises = paises;
      console.log(paises);
    }, (error) => {
      console.log("Error");
      console.info(error);
      this.hayError = true;
    })
  }    
}
