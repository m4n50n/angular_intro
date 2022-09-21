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
    /* Los imports son todos los módulos que se importarán a este módulo */
    imports: [
        CommonModule // Este módulo es necesario puesto que ofrece directivas de Angular como ngFor, ngIf, etc... y si no lo importamos no funcionarán
    ]
})

export class HeroesModule {}
