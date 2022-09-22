// Importaciones de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importación de componentes
import { MainPageComponent } from './main-page/main-page.component';;
import { PersonajesComponent } from './personajes/personajes.component'
@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent // Este componente no sería necesario exportarlo porque solo se mostraría dentro del componente MainPageComponent
  ],
  exports: [
    MainPageComponent // Debemos exportar el componente para que sea visible externamente
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class DbzModule { }
