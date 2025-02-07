import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';



@NgModule({
  declarations: [SerieModule],
  imports: [
    CommonModule
  ],
  exports:[SerieModule],
})
export class SerieModule { }
