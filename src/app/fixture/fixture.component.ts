import { Component, OnInit } from '@angular/core';
import {FixtureService} from '../fixture.service'
import {Equipo} from '../equipo'
import {EquiposService} from '../equipos.service'
import { ListaEquiposComponent } from '../lista-equipos/lista-equipos.component';
import { Fixture } from '../fixture';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  listaEquipos = ListaEquiposComponent;
  fixture : Fixture;
  
  constructor(private fixtureService : FixtureService, private equiposService:EquiposService) { }
  
  getEquipos(){
    this.equiposService.getEquipos().subscribe(equipos =>{this.listaEquipos;},
  }
  public createFixture(){
    this.getEquipos();
    this.fixture.cruze = this.listaEquipos[0-1];
    cruzes : Array<this.fixture.cruze>[];

  }
  

  ngOnInit() {   
    this.fixtureService.createFixture()
  }

}
