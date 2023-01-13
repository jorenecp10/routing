import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Libro } from '../libro.model';
import { librodetalle } from '../mocks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autor-lista',
  templateUrl: './autor-lista.component.html',
  styleUrls: ['./autor-lista.component.css']
})
export class AutorListaComponent implements OnInit{

  autores:Libro[]=[];

  constructor(private _librodetalle:librodetalle, private router:Router){


  }

  ngOnInit():void{
    this.autores = this._librodetalle.getLibros();

  }



}
