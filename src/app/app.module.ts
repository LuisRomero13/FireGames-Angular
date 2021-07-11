//modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//firebase y servicios 
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ConexionService } from "./servicios/conexion.service";

//componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListaJuegosComponent } from './componentes/lista-juegos/lista-juegos.component';
import { NuevoJuegoComponent } from './componentes/nuevo-juego/nuevo-juego.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AboutComponent } from './componentes/about/about.component';
import { ReactivoComponent } from './compartido/formularios/reactivo/reactivo.component';
import { ValidadoresService } from "./compartido/formularios/reactivo/validadores.service";
import { FormFireComponent } from './compartido/form-fire/form-fire.component';
import { EditarJuegoComponent } from './componentes/editar-juego/editar-juego.component';
import { GuardService } from './servicios/guard.service';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaJuegosComponent,
    NuevoJuegoComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ReactivoComponent,
    FormFireComponent,
    EditarJuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ConexionService,ValidadoresService,GuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
