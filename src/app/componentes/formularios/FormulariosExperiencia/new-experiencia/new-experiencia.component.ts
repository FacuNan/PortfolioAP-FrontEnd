import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/servicios/experiencia-service.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE = '';
  institucion = '';
  descripcion = '';
  fechaInicio = '';
  fechaTerminacion = '';

  isLogged = false;
  validacionExperiencia: FormGroup = new FormGroup({});

  constructor(private sExperiencia: ExperienciaServiceService, private tokenService: TokenService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true
    } else {
      this.isLogged = false
    }

    this.validacionExperiencia = this.formBuilder.group({
      nombreExperiencia: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      empresa: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      descripcionExp: ['', Validators.compose([Validators.required, Validators.maxLength(200)])],
      fechaInicioExp: ['', Validators.required],
      fechaTerminacionExp: ['', Validators.required]

    })

  }

  agregarExperiencia(): void {
    const exp = new Experiencia(this.nombreE, this.institucion, this.descripcion, this.fechaInicio, this.fechaTerminacion)

    this.sExperiencia.save(exp).subscribe(data => {
      alert('Experiencia añadida')
      this.router.navigate(['home/experiencia'])

    }, err => {
      alert('No se ha podido agregar la experiencia')
      this.router.navigate(['home/experiencia'])
    })
  }


  get nombreExperiencia() {
    return this.validacionExperiencia.get('nombreExperiencia')
  }

  get empresa() {
    return this.validacionExperiencia.get('empresa')
  }

  get descripcionExp() {
    return this.validacionExperiencia.get('descripcionExp')
  }

  get fechaInicioExp(){
    return this.validacionExperiencia.get('fechaInicioExp')
  }

  get fechaTerminacionExp(){
    return this.validacionExperiencia.get('fechaTerminacionExp')
  }





}
