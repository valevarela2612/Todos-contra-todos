import { Component, OnInit} from '@angular/core';
import {Equipo} from '../equipo'
import {EquiposService} from '../equipos.service'
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.css']
})
export class ListaEquiposComponent implements OnInit {

  equipoSeleccionado : Equipo;
  public listaEquipos : Equipo[]= [];
  constructor(private equipoService : EquiposService) { }

  onSelect(equipo : Equipo): void {
    this.equipoSeleccionado = equipo;
  }
  delete(equipo :string) : void {
    this.equipoService.delete(equipo);
  }
  ngOnInit() {
    this.equipoService.getEquipos().subscribe(equipos =>{
       this.listaEquipos = equipos;
    });
  }
}
