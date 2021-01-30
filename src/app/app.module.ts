import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// import { InicioComponent } from './inicio/inicio.component';

import { AppRoutingModule } from './app-routing.module';
import { RegistroComponent } from './registro/registro.component';





@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,

    // InicioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
