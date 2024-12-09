import { Component,NgModule } from '@angular/core';
import { IMensaje } from './IMensaje';
import { CommonModule } from '@angular/common';
import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css'
})
export class MensajesComponent {

  mensajes: IMensaje[] = [];
  constructor(private data: ServiciosService) {
    this.data.getmensajes().subscribe((VariableMensaje) => {
      VariableMensaje.forEach((x) => {
        this.mensajes.push(x);
      });
    });
    }
  }


