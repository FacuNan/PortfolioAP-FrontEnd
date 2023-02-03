import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experienciaService:any;
constructor(private serviceExperiencia: PortfolioService){}
  ngOnInit(): void {
    this.serviceExperiencia.obtenerDatos().subscribe(data =>{
     this.experienciaService = data.experiencia;
    })
    
  }

}
