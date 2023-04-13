import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';

import { ExperienciaServiceService } from 'src/app/servicios/experiencia-service.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia[] = [];
  isLogged = false;


  constructor(private serviceExperiencia: ExperienciaServiceService, private tokenService: TokenService) { }


  ngOnInit(): void {

    this.cargarExperiencia();

    if (this.tokenService.getToken()) {
      this.isLogged = true
    } else {
      this.isLogged = false
    }



  }

  Delete(id?: number) {
    if (id != undefined)
      this.serviceExperiencia.delete(id).subscribe(data => {
        this.cargarExperiencia();
      }, err => {
        alert('No se ha podido eliminar la experiencia')
      })
  }

  cargarExperiencia(): void {
    this.serviceExperiencia.lista().subscribe(
      data => (this.experiencia = data))

  }




}


