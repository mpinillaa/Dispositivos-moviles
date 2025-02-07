import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CineModule } from './peliculas/cine.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CineModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo1';
}
