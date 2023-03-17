import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  validacionEducacion: FormGroup = new FormGroup({})

  constructor(private router: Router, private tokenService: TokenService, private Seducacion: EducacionServiceService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false
    }

    this.validacionEducacion = this.formBuilder.group({
      nombreEducacion: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      institucionEdu:['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      descripcionEdu:['', Validators.compose([Validators.required, Validators.maxLength(200)])]
    })
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

get nombreEducacion(){
  return this.validacionEducacion.get('nombreEducacion')
}

get institucionEdu(){
  return this.validacionEducacion.get('institucionEdu');
}

get descripcionEdu(){
  return this.validacionEducacion.get('descripcionEdu');
}
}
