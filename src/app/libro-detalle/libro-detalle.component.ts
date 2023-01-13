import { Component,OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { librodetalle } from '../mocks';

@Component({
  selector: 'app-libro-detalle',
  templateUrl: './libro-detalle.component.html',
  styleUrls: ['./libro-detalle.component.css']
})
export class LibroDetalleComponent implements OnInit{

  libro:any={};

  constructor (private route:ActivatedRoute,private _librodetalle:librodetalle,){

              this.route.params.subscribe(params=>{
                this.libro = this._librodetalle.getLibro(params['id']);
                console.log(params['id']);
              });
  }

  ngOnInit() {

    }


}
