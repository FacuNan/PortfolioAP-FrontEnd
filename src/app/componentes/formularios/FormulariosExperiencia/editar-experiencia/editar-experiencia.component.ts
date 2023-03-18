import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/servicios/experiencia-service.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  explab: Experiencia = null;
  validacionExperiencion: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder, private Sexperiencia: ExperienciaServiceService, private router: Router, private activateRouter: ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.Sexperiencia.detail(id).subscribe(
      data =>{
        this.explab = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )

    this.validacionExperiencion = this.formBuilder.group({
      nombreExperiencia: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      empresa:['',Validators.compose([Validators.required, Validators.maxLength(50)])],
      descripcionExp:['', Validators.compose([Validators.required, Validators.maxLength(200)])]
    })
  }
  
  onUpdate(): void{
    const id = this.activateRouter.snapshot.params['id'];
    this.Sexperiencia.update(id, this.explab).subscribe(
      data => {
        alert('La experiencia fue modificada con exito')
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    )
  }

  get nombreExperiencia(){
    return this.validacionExperiencion.get('nombreExperiencia');
  }

  get empresa(){
    return this.validacionExperiencion.get('empresa')
  }

  get descripcionExp(){
    return this.validacionExperiencion.get('descripcionExp')
  }

}
