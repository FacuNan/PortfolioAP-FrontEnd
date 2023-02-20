import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/PersonaModel';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit{
  persona: Persona = new Persona(" ", " ", " ", " ");
  token = sessionStorage.getItem('token');
  constructor(private personaService: PersonaService){}

  ngOnInit(): void {
  this.personaService.getPersona().subscribe(data => {
    this.persona=data;
  })
  }
 

 


}
