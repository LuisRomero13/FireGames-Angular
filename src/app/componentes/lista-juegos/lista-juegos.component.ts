import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConexionService,Juego } from 'src/app/servicios/conexion.service';
import { NavigationExtras, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css']
})
export class ListaJuegosComponent implements OnInit {
  
  navigationExtras: NavigationExtras = {
    state: {
      juegoCompleto: null
    }
  };
  items!: Juego[];
  constructor(private router: Router,private _conexion:ConexionService) { 
    this._conexion.listaJuegos().subscribe(juego=>{
      this.items=juego;
    });
  }

  ngOnInit(): void {
  }

  eliminar(item:Juego){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "¡no podrás revertirlo!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText:"cancelar",
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si,borralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._conexion.eliminarJuego(item);
        Swal.fire(
          '¡Borrado!',
          'Tu juego se ha borrado exitosamente.',
          'success'
        )
        }else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          Swal.fire(
            'Cancelado',
            'Tu juego está a salvo :)',
            'error'
          )
        }
      });
  }

  aboutJuego(item:Juego){
    this.navigationExtras.state!.juegoCompleto =item;
    this.router.navigate(['about'], this.navigationExtras);
  }

  editarJuego(item:Juego){
    this.navigationExtras.state!.juegoCompleto =item;
    this.router.navigate(['editar-juego'], this.navigationExtras);
  }
}
