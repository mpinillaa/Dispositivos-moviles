import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlumnoModule } from './alumnos/alumno/alumno.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AlumnoModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo1';
}
