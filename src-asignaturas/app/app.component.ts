import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsignaturacomponentComponent } from './componentes/asignaturacomponent/asignaturacomponent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsignaturacomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo1';
}
