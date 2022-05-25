import { Component } from '@angular/core';

@Component({
    selector: "app-contador",
    templateUrl: "contador.component.html"
})

export class ContadorComponent {
    titulo: string = "Contador App";
    numero: number = 0;
    base: number = 5;

    operar(num: number) {
        this.numero += num;
    }
}