import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';
import { MensajesComponent } from './mensajes/mensajes.component';

export const routes: Routes = [

{ path:'', component:MensajesComponent},
{ path: 'detalles/:id', component: DetallesComponent}

];