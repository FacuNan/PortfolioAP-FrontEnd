import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent  implements OnInit{

  miPortfolio: any;

  constructor(private dataServicios: PortfolioService){ }

  ngOnInit(): void{
    this.dataServicios.obtenerDatos().subscribe(data => this.miPortfolio = data.perfil 
      
    );
    
    
    }

}
