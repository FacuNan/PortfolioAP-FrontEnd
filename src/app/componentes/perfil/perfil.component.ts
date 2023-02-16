import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/PersonaModel';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  persona: Persona = new Persona(" ", " ", " ");
  isLogged = false;
  token = sessionStorage.getItem('token')

  miPortfolio: any;

  constructor(public personaService: PersonaService,public tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true
    }else{
      this.isLogged=false
    }
   
    /*con java*/
    this.personaService.getPersona().subscribe(data => {
      this.persona = data;
    })
  }

}
