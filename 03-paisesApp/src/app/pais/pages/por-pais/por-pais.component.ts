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

  constructor(private paisService: PaisService) {}

  buscar():void {
    console.log(this.termino);

    // Nos suscribimos aquí y no en el servicio.
    this.paisService.buscarPais(this.termino)
      .subscribe(respuesta => {
        console.log(respuesta);
      }); 
  }
}
