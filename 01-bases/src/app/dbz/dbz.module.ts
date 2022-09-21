import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent // Debemos exportar el componente para que sea visible externamente
  ],
  imports: [
    CommonModule
  ]
})

export class DbzModule { }
