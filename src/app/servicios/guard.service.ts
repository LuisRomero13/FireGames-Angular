import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { FormFireComponent } from '../compartido/form-fire/form-fire.component';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanDeactivate<FormFireComponent>{

  canDeactivate(form:FormFireComponent):Observable<boolean> | Promise<boolean> | boolean{
    if(form.forma.dirty){
      return  Swal.fire({
        title:'¿estás seguro que deseas salir sin guardar cambios?',
        showCancelButton:true,
        cancelButtonText:'cancelar',
        confirmButtonText:'confirmar'
      }).then((result)=>{
        return result.isConfirmed?true:false;
      });
      
    }
    return true;
  }
  constructor() { }
}
