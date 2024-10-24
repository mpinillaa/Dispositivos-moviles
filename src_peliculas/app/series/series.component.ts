import { Component } from '@angular/core';
import { Iseries } from './Iseries';

@Component({
  selector: 'app-series',
  standalone: false,
  
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  lista:Iseries[]=[];


}
