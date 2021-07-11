import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from "./validadores.service";
@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styles: [
  ]
})
export class ReactivoComponent implements OnInit {
  forma!: FormGroup;
  constructor(private _fb:FormBuilder,private _validadores:ValidadoresService) { 
    this.crearformulario();
  }

  ngOnInit(): void {
  }
  crearformulario(){
    this.forma=this._fb.group({
      nombre: ['',[Validators.required,Validators.minLength(4)]],
      apellido: ['',Validators.required],
      correo: ['',[Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      direccion: this._fb.group( {
        distrito:['', Validators.required],
        ciudad:['', Validators.required]
      }),
      usuario:['', Validators.required, this._validadores.existeUsuario]
    });
  }

  guardar(){
    if (this.forma.invalid) {
      this.forma.markAllAsTouched();
    }
    this.forma.reset();
  }

  campoNoValido(campo: string) {
    return this.forma.get(campo)?.invalid && this.forma.get(campo)?.touched;
    
  }
}
