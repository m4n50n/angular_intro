import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

/* El objetivo de los módulos es ayudar a comprobar componentes y piezas de la aplicación que tienen sentido entre sí */
/* Al agruparlos, los tendremos mejor clasificados sin necesidad de tener muchísimos componentes importados en app.module.ts a la vez */
@NgModule({
    // Las declaraciones incluyen los elementos por los que está formado el módulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    /* Los exports definen qué elementos quiero hacer visibles o públicos fuera de este módulo */
    exports: [
        ListadoComponent
    ],
    /* Los imports son todos los módulos importados */
    imports: [
        CommonModule
    ]
})

export class HeroesModule {}
