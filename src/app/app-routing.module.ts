import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroListaComponent } from './libro-lista/libro-lista.component';
import { AutorListaComponent } from './autor-lista/autor-lista.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';

const routes: Routes = [
  {path:"libros",component:LibroListaComponent},
  {path:"autores",component:AutorListaComponent},
  {path:'libros/:id',component:LibroDetalleComponent},
  {path:'',redirectTo:'/libros',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
