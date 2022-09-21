import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador-numeros.component';

@NgModule({    
    declarations: [
        ContadorComponent
    ],    
    exports: [
        ContadorComponent
    ]
})

export class ContadorModule {}
