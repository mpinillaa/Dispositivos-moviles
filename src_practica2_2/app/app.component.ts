import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/* import { AlumnoModule } from './alumnos/alumno/alumno.module'; */
import { NotaComponent } from './alumnos/nota/nota.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NotaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo1';
}
