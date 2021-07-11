import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


interface errorValidate{
  [s:string]: boolean
}

@Injectable({
  providedIn: 'root'
})

export class ValidadoresService {

  constructor() { }

  existeUsuario(control: FormControl): Promise<errorValidate> | Observable<errorValidate>{
   return new Promise((resolve,reject)=>{
     setTimeout(() => {
       if(control.value==='agh'){
         resolve({existe: true});
       }else{
         resolve({existe:false});
       }
     }, 3500);
   })
}
}