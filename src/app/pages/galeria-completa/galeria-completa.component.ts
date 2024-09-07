import { Component, inject } from '@angular/core';
import { CrashService } from '../../services/crash.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria-completa',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './galeria-completa.component.html',
  styleUrl: './galeria-completa.component.css'
})
export class GaleriaCompletaComponent {

  servicio= inject(CrashService)

  personajes:any
  
  ngOnInit(){
    this.servicio.getCrash().subscribe( c =>{
      this.personajes=c
    })
  }

}
