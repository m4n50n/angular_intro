import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

// Definición de rutas
const routes: Routes = [
    {   
        path: "", // Raíz del sitio
        component: PorPaisComponent,
        pathMatch: "full" // Esto obliga a que toda la ruta sea exacta, ya que si mi raiz es dominio.com y voy a dominio.com/pagina la daría por buena porque esta incluye dominio.com
    },
    {
        path: "region",
        component: PorRegionComponent,
        pathMatch: "full"
    },
    {
        path: "capital",
        component: PorCapitalComponent,
        pathMatch: "full"
    },
    {
        path: "pais/:id", // :id actúa como argumento en la url
        component: VerPaisComponent,
        pathMatch: "full"
    },
    {
        path: "**", // Cualquier otro path que no sea ninguno de los anteriores
        redirectTo: "" // Redireccionar a la raíz del sitio (aquí podría ponerse un componente de error 404)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes) // Con forRoot indicamos las rutas principales (forChild serían las rutas hijas)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
