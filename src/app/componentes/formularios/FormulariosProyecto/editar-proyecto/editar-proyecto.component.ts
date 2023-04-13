import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosServiceService } from 'src/app/servicios/proyectos-service.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  proyecto: Proyectos = null;
  validacionProyectos: FormGroup = new FormGroup({});

  constructor(private proyectosService: ProyectosServiceService, private router: Router, private activaterouter: ActivatedRoute, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    const id = this.activaterouter.snapshot.params['id']

    this.proyectosService.detail(id).subscribe(data => {
      this.proyecto = data
    }, err => {
      alert('No ha sido posible actualizar el proyecto')
    })

    //Validacion del formulario proyectos
    this.validacionProyectos = this.formBuilder.group({
      nombreProyecto: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      imgPro: ['', Validators.compose([Validators.required])],
      descripcionPro: ['', Validators.compose([Validators.required, Validators.maxLength(200)])],
      link: ['', Validators.compose([Validators.required])]
    })
  }

  onUpdate(): void {
    const id = this.activaterouter.snapshot.params['id']
    this.proyectosService.update(id, this.proyecto).subscribe(data => {
      alert('el proyecto fue actualizado con exito')
      this.router.navigate([''])
    }, err => {
      alert('No ha sido posible actualizar el proyecto')
      this.router.navigate([''])
    })
  }

  get nombreProyecto() {
    return this.validacionProyectos.get('nombreProyecto')
  }

  get imgPro() {
    return this.validacionProyectos.get('imgPro')
  }

  get descripcionPro() {
    return this.validacionProyectos.get('descripcionPro')
  }

  get link() {
    return this.validacionProyectos.get('link')
  }

}
