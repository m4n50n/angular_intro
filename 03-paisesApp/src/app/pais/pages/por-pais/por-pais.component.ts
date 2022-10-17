import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino: string = "";
  hayError: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar():void {
    this.hayError = false;
    console.log(this.termino);

    // Nos suscribimos aquí y no en el servicio.
    this.paisService.buscarPais(this.termino)
    .subscribe((respuesta) => {
      console.log(respuesta);
    }, (error) => {
      console.log("Error");
      console.info(error);
      this.hayError = true;
    })
  }    
}
