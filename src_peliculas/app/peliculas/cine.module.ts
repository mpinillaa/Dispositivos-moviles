import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './peliculas.component';



@NgModule({
  declarations: [PeliculasComponent],
  imports: [
    CommonModule
  ],
  exports: [PeliculasComponent]
})
export class CineModule { }
