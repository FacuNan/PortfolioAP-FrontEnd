import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/servicios/educacion-service.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreE = '';
  institucion = '';
  descripcion = '';
  fechaInicio = '';
  fechaTerminacion = '';

  isLogged = false;

  constructor(private router: Router, private tokenService: TokenService, private Seducacion: EducacionServiceService) { }
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false
    }
  }

  agregarEducacion(): void {
    const edu = new Educacion(this.nombreE, this.institucion, this.descripcion, this.fechaInicio, this.fechaTerminacion);

    this.Seducacion.save(edu).subscribe(data => {
      alert('La educacion se añadio correctamente')
      this.router.navigate(['home/educacion'])
    }, err => {
      alert('La educacion no pudo ser añadida')
      this.router.navigate(['home/educacion'])
    })
  }


}
