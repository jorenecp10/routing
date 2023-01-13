import { Libro } from "./libro.model";



export class librodetalle {

private LIBROS:Libro[]=[
  {
    "id":0,
    "titulo":"El quijote",
    "autor":"cervantes"
  },
  {
    "id":1,
    "titulo":"Hamlet",
    "autor":"Shakespeare"
  }
]

getLibro(id:number){
  return this.LIBROS[id];

}
getLibros(){
  return this.LIBROS

}


}
