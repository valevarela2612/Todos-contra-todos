import { Component, OnInit, Input } from '@angular/core';
import { EquiposService } from '../equipos.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
  
export class EquiposComponent implements OnInit { 

  equipoNombre : string;
  
  constructor(private equiposService: EquiposService) { }
  
  public addEquipo() {
    this.equiposService.add(this.equipoNombre);
  }

  ngOnInit(){
    
  }

}
