import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  // En tecnolog�as ant�guas usar�amos el preventDefault de esta manera para evitar que la p�gina se refresque despu�s de hacer submit
  agregarFormaAntigua(event: any) {
    event.preventDefault();
    console.log(event);
  }

  agregar() {
    console.log("Agregar");
  }
}
