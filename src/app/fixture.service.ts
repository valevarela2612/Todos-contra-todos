import { Injectable } from '@angular/core';
import {FixtureComponent} from './fixture/fixture.component'
import {Fixture} from './fixture'
import {ListaEquiposComponent} from './lista-equipos/lista-equipos.component'


@Injectable({
  providedIn: 'root'
})
export class FixtureService {
  fixture: Fixture;
  listaEquipos : ListaEquiposComponent;  

  createFixture(fecha: Date, equipo : ListaEquiposComponent, index: [][]) {    
    this.fixture.fecha = fecha ;
    this.fixture.cruzes.push(equipo.listaEquipos[index]);
  }
  
  constructor() { }
}
