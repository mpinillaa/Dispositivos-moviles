import { Component } from '@angular/core';
/* import { AlumnoModule } from '../alumno/alumno.module; */
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nota',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nota.component.html',
  styleUrl: './nota.component.css'
})
export class NotaComponent {
  asignatura:string =  "app-moviles";
  nota: number = 3;
}
