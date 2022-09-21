import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador-numeros/contador/contador-numeros.module';

/* El objetivo de los módulos es ayudar a comprobar componentes y piezas de la aplicación que tienen sentido entre sí */
@NgModule({
  declarations: [ // Declaración de los components creados
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule, // De esta manera importamos únicamente el módulo de héroes (con todos los componentes que este contenga) sin necesidad de importar todos los componentes en este fichero
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
