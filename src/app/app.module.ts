import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroListaComponent } from './libro-lista/libro-lista.component';
import { AutorListaComponent } from './autor-lista/autor-lista.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';
import { librodetalle } from './mocks';
import { LibroOpinionesComponent } from './libro-opiniones/libro-opiniones.component';
import { LibroImagenesComponent } from './libro-imagenes/libro-imagenes.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroListaComponent,
    AutorListaComponent,
    NotFoundComponent,
    LibroDetalleComponent,
    LibroOpinionesComponent,
    LibroImagenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [librodetalle],
  bootstrap: [AppComponent]
})
export class AppModule { }
