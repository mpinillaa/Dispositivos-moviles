import { Component } from '@angular/core';
import {  NgFor } from '@angular/common';
import { Inota } from './Inota';

@Component({
  selector: 'app-nota',
  standalone: false,
  templateUrl: './nota.component.html',
  styleUrl: './nota.component.css'
})
export class NotaComponent {
 
  
  lista:Inota[]=[];

  constructor(){
    this.lista=[
      {
        nombre:"SergioLuis",
        asignatura:"marcas" ,
        nota:7
      },
      {
        nombre:"Juan",
        asignatura:"servidor",
        nota:3
      },
      {
        nombre:"Ana",
        asignatura:"java",
        nota:2
      }
    ]
  }
}


