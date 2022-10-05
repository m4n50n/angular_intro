// Importaciones de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; /* Módulo tradicional de manejo de formularios en Angular */

// Importación de componentes
import { MainPageComponent } from './main-page/main-page.component';;
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component'

@NgModule({
  declarations: [
    MainPageComponent,

    // Estos componentes no sería necesario exportarlos porque solo se muestran y usan dentro del componente MainPageComponent
    PersonajesComponent,
    AgregarComponent
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
