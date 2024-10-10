import { Component } from '@angular/core';
import { Ipeli } from './Ipeli';

@Component({
  selector: 'app-peliculas',
  standalone: false,

  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {

  lista:Ipeli[]=[];

  constructor(){
    this.lista=[
      {
        titulo : "Transformers",
        director : "Carlos",
        anyoEstreno: 2005,
      },
      {
        titulo : "Cars",
        director : "Eva",
        anyoEstreno: 2008,
      },
      {
        titulo : "Cars 2",
        director : "Luis",
        anyoEstreno: 2010,
      }
    ]
  }
}
