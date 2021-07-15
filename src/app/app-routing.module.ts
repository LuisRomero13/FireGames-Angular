import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { ListaJuegosComponent } from "./componentes/lista-juegos/lista-juegos.component";
import { NuevoJuegoComponent } from "./componentes/nuevo-juego/nuevo-juego.component";
import { AboutComponent } from "./componentes/about/about.component";
import { EditarJuegoComponent } from './componentes/editar-juego/editar-juego.component';
// import { GuardService } from './servicios/guard.service';

const ROUTES: Routes = [
  {path: 'inicio',component:InicioComponent },
  {path: 'lista-de-juegos',component:ListaJuegosComponent },
  {path: 'nuevo-juego',component:NuevoJuegoComponent},
  {path: 'editar-juego',component:EditarJuegoComponent },
  {path: 'about',component:AboutComponent },
  {path: '**', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

