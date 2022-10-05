// Importaciones de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; /* Módulo tradicional de manejo de formularios en Angular */

// Importación de componentes
import { MainPageComponent } from './main-page/main-page.component';;
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component'

// Importación de servicios
import { DBzService } from './services/dbz.service';

@NgModule({
  // Declaración de componentes que conforman el módulo
  declarations: [
    MainPageComponent,

    // No sería necesario exportar los siguientes componentes porque solo se muestran y usan dentro del componente MainPageComponent
    PersonajesComponent,
    AgregarComponent
  ],
  // Exportación de componentes que serán visibles externamente
  exports: [
    MainPageComponent
  ],
  // Import de módulos necesarios
  imports: [
    CommonModule,
    FormsModule
  ],
  // Importación de servicios (providers) para este módulo
  // Los servicios servirán como una única instancia que tendremos a lo largo de este módulo
  // Deberán ser instanciados una primera vez
  providers: [
    DBzService
  ]
})

export class DbzModule { }
