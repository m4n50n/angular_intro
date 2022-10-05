// Import de módulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import de componentes
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]   
})
export class SharedModule { }
