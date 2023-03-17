import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/servicios/educacion-service.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {
  edu: Educacion = null;

  validacionEducacion: FormGroup= new FormGroup({});


  constructor(private sEducacion: EducacionServiceService, private router: Router, private activateRouter: ActivatedRoute, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id']

    this.sEducacion.detail(id).subscribe(data => {
      this.edu = data
    }, err => {
      alert('La educacion no puede ser actualizada')
    })

    //Validacion de formulario

    this.validacionEducacion= this.formBuilder.group({
      nombreEducacion:['', Validators.compose([Validators.required, Validators.minLength(100)])],
      institucion:['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      descripcion:['',Validators.compose([Validators.required, Validators.maxLength(200)])]

    })

  }
  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.edu).subscribe(data => {
      alert('La educacion fue actualizada con exito')
      this.router.navigate([''])
    }, err => {
      alert('La Educacion no pudo ser actualizada')
      this.router.navigate(['']);
    })

  }

  get nombreEducacion(){
    return this.validacionEducacion.get('nombreEducacion')
  }

  get institucion(){
    return this.validacionEducacion.get('institucion')
  }
  get descripcion(){
return this.validacionEducacion.get('descripcion');
  }
}
