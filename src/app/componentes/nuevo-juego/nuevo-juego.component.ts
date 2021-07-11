import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevo-juego',
  template: `<app-form-fire [titulo]="tituloCompleto"></app-form-fire>`,
  styleUrls: ['./nuevo-juego.component.css']
})

export class NuevoJuegoComponent {
  tituloCompleto:string="la creación de un nuevo juego";
}
