import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/PersonaModel';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  persona: Persona = new Persona(" ", " ", " ");
  token = sessionStorage.getItem('token')

  miPortfolio: any;

  constructor(private dataServicios: PortfolioService, public personaService: PersonaService) { }

  ngOnInit(): void {
    /*prueba sin java*/
    this.dataServicios.obtenerDatos().subscribe(data => this.miPortfolio = data.perfil

    );
    /*con java*/
    this.personaService.getPersona().subscribe(data => {
      this.persona = data;
    })
  }

}
