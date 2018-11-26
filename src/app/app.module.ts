import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquiposComponent } from './equipos/equipos.component';
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';
import { CommonModule } from '@angular/common';
import { FixtureComponent } from './fixture/fixture.component';

@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    ListaEquiposComponent,
    FixtureComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
