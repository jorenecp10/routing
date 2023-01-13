import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { Libro } from '../libro.model';
import { librodetalle } from '../mocks';
@Component({
  selector: 'app-libro-imagenes',
  templateUrl: './libro-imagenes.component.html',
  styleUrls: ['./libro-imagenes.component.css']
})
export class LibroImagenesComponent implements OnInit {

  idLibro:number=0;
  libro:Libro[]=[];
  constructor (private route:ActivatedRoute ){

    this.route.params.subscribe(params=>{
    this.idLibro=params['id'];
    });
}

ngOnInit() {

}
}
