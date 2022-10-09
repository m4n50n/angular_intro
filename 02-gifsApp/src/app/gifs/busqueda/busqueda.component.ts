import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {
  /* Método antiguo con el que podría hacerse */
  /* En el inspector de Chrome podemos ver que el evento es de tipo KeyboardEvent si hacemos un console.log(event), por ejemplo */  
  buscar_old(event: KeyboardEvent): void {
    console.log(event);
  }

  // Con este método obtendríamos el valor del input recibido usando la referencia local de busqueda.component.html, pero desde aquí no podriamos acceder a ese input y borrar su contenido por ejemplo
  buscar(termino_busqueda: string): void {
    console.log(termino_busqueda)
  }

  // Con el siguiente decorador sí podríamos tener acceso al input mediante la referencia local definida
  // Usamos el Operador de aserción no nulo (exclamación al final) (https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator) para indicar que ese input siempre va a formar parte del HTML y nunca va a ser nulo ni indefinido
  // Podemos hacer uso de los genéricos para seleccionar el tipo que es (en este caso HTMLInputEelement). Esto lo buscaremos cada vez que obtengamos un error
  @ViewChild('txtBuscar') txtBuscarLocal!: ElementRef<HTMLInputElement>; // En el inspector de Chrome podemos ver que el tipo de "evento" es ElementRef 

  constructor(private gifsService: GifsService) {} // Iniciar instancia del servicio en el constructor

  buscar_final(): void { // Como accedemos al input mediante el decorador, no tenemos que enviar ni recibir ningún parámetro
    const valor = this.txtBuscarLocal.nativeElement.value;

    if (valor.length === 0) { return; }

    console.log("Valor de búsqueda: ", valor);

    // Insertar búsqueda en el historial
    this.gifsService.buscarGifs(valor);

    // Con @ViewChild ahora sí que podemos reiniciar el valor del input puesto que estamos apuntando a el directamente
    this.txtBuscarLocal.nativeElement.value = "";
  }
}
