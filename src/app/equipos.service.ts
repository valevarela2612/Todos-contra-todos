import { Injectable } from '@angular/core';
import { Equipo } from './equipo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor() { }
  private listaEquipos : Equipo[] = [];

  getEquipos(): Observable<Equipo[]> {    
    return of(this.listaEquipos);
  }
  
  add(equipoInput : string) {
    var equipo = new Equipo();
    equipo.nombre = equipoInput ;
    this.listaEquipos.push(equipo);
  }
  clear() {
    this.listaEquipos = [];
  }
  delete(equipo: string) {
    var posIndex = this.listaEquipos.findIndex((e:Equipo)=> e.nombre == equipo);
    this.listaEquipos.splice(posIndex, 1);
  }
  
}
