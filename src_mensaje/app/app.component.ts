import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MensajesComponent } from './mensajes/mensajes.component';
import { DetallesComponent } from './detalles/detalles.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MensajesComponent,DetallesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo_1';
}
