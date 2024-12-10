import { Injectable } from '@angular/core';
import { IAVisual, IDatos } from '../componentes/IAVisual';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

 

  constructor(private http: HttpClient) {
   
  }
      
   public getPeliculas(): Observable<IDatos>{
    return this.http.get<IDatos>("peliculas.json");
   }

   public getSeries(): Observable<IDatos>{
    return this.http.get<IDatos>("series.json");
   }
   
  }

