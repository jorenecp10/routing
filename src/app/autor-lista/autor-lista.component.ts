import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Libro } from '../libro.model';
import { LIBROS } from '../mocks';

@Component({
  selector: 'app-autor-lista',
  templateUrl: './autor-lista.component.html',
  styleUrls: ['./autor-lista.component.css']
})
export class AutorListaComponent implements OnInit{

  autores:Libro[]=[];

  ngOnInit(){
    
    this.autores=LIBROS;
  }



}
