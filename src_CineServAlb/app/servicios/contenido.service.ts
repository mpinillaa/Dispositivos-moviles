import { Injectable } from '@angular/core';
import { Icine } from '../peliculas/Icine';
import { Iserie } from '../peliculas/Iserie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContenidoService {
  listaCine: Icine[] = [];
  listaSerie: Iserie[] = [];

  constructor(private http: HttpClient) {}
   

  public getPeliculas(): Observable<Icine[]> {
    return this.http.get<Icine[]>("/data/peliculas.json");
  }

  public getSeries(): Iserie[] {
    return this.listaSerie;
  }
}

