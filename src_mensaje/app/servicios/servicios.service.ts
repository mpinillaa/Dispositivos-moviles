import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMensaje } from '../mensajes/IMensaje';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) {}

  public getmensajes(): Observable<IMensaje[]>{
    return this.http.get<IMensaje[]>('/data/Peliculas.json');
  }
}
