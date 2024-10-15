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
        imagen: "https://media.revistagq.com/photos/5ca5f1b3f46488687cf49211/16:9/w_1280,c_limit/peliculas_mas_taquilleras_5260.jpg"
      },
      {
        titulo : "Cars",
        director : "Eva",
        anyoEstreno: 2008,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1mdpNpDtv_mG1WtqPtsMksEAhVYRctOf1g&s"
      },
      {
        titulo : "Cars 2",
        director : "Luis",
        anyoEstreno: 2010,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTlJ4CgtNhx2Z1I__xsl8aqkqr-YE2YPRf-w&s"
      }
    ]
  }
}
