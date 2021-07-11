import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/servicios/conexion.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  juegoCompleto: Juego;
  
  constructor(private router: Router) {  
    const navigation = this.router.getCurrentNavigation() ;
    this.juegoCompleto=navigation?.extras?.state?.juegoCompleto;
  }
  
  ngOnInit(): void {
  }
}
