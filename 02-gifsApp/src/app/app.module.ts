import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import de componentes
import { AppComponent } from './app.component';

// Import de módulos
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    GifsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
