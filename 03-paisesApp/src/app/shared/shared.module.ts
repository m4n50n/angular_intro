import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [ // Exportamos el componente puesto que lo usaremos fuera de este módulo
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
