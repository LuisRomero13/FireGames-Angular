 import { Component, Input, OnInit } from '@angular/core';
import { ConexionService,Juego } from 'src/app/servicios/conexion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-fire',
  templateUrl: './form-fire.component.html',
  styleUrls: ['./form-fire.component.css']
})
export class FormFireComponent implements OnInit {
  
  @Input() titulo="";
  forma!: FormGroup;
  juego: Juego;

  constructor(private router: Router,private _fb:FormBuilder,private _conexion:ConexionService) { 
    this.crearformulario();
    const navigation=this.router.getCurrentNavigation();
    
      this.juego=navigation?.extras?.state?.juegoCompleto;
   
  }

  ngOnInit(): void {
    if (typeof this.juego === 'undefined') {
      this.router.navigate(['/nuevo-juego']);
    } else {
      this.forma.patchValue(this.juego);
    }
  }

  crearformulario(){
    this.forma=this._fb.group({
      Nombre: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
      CreadoPor: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
      Descripcion: ['',[Validators.required,Validators.minLength(4)]],
      imagenUrl: ['',[Validators.required,Validators.minLength(4)]]
    });
  }

  guardar(){
    
    if (this.forma.invalid) {
      this.forma.markAllAsTouched();
      Swal.fire({
        icon: 'error',
        title: 'Ups...',
        text: 'Algún campo está incorrecto o incompleto.',
      })
    }else {
      //Posteo de la Informacion, guardar en base de datos
      
      if (typeof this.juego === 'undefined') {
        this.juego=this.forma.value;
        this._conexion.agregarJuego(this.juego);
      Swal.fire(
        '¡Juego creado!',
        'Tu juego ha sido creado correctamente.',
        'success'
      )      
      }
      else{      
        const Id=this.juego.id;
        this.juego=this.forma.value;
        this.juego.id=Id;
        this._conexion.actualizarJuego(this.juego);
        Swal.fire(
          '¡Juego actualizado!',
          'Tu juego ha sido actualizado correctamente.',
          'success'
        )  
      }
      this.forma.reset();
    }  
  }

  esValido(campo: string) {
    const campoValido=this.forma.get(campo);
    return (!campoValido?.valid && campoValido?.touched)? 'is-invalid' : campoValido?.touched ? 'is-valid' : '';
  }
}