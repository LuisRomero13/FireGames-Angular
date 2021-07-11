import { Component} from '@angular/core';

@Component({
  selector: 'app-editar-juego',
  template: `<app-form-fire [titulo]="tituloCompleto"></app-form-fire> `,
  styleUrls: ['./editar-juego.component.css']
})
export class EditarJuegoComponent {
  tituloCompleto="la edición del juego";
}
