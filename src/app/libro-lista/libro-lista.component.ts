import { Component,OnInit } from '@angular/core';
import { Libro } from '../libro.model';
import { librodetalle } from '../mocks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro-lista',
  templateUrl: './libro-lista.component.html',
  styleUrls: ['./libro-lista.component.css']
})

export class LibroListaComponent implements OnInit {
  libros:Libro[]=[];

  constructor(private _librodetalle:librodetalle,private router:Router){

  }

  ngOnInit():void {

     this.libros=this._librodetalle.getLibros();

  }



}
