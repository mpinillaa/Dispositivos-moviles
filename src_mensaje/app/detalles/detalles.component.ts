import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';
import { IMensaje } from '../mensajes/IMensaje';


@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {
  id: string=""; // meter una variable para que te lo guarde y lo muestre
  
  mensajes: IMensaje[] = [];  //Variable que guarda el json, importar para que no de error

  constructor(private router: ActivatedRoute, private data: ServiciosService){
    //siempre meter ActivatedRoute

      this.data.getmensajes().subscribe((VariableMensaje) => {
        VariableMensaje.forEach((x) => {
          this.mensajes.push(x);
        });
      });
      

}

ngOnInit() {
  this.router.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get("id") || '';  // Obtenemos el id de la URL, si no está, se asigna un string vacío
  });
}

}