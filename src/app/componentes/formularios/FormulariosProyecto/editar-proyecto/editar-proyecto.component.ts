import { Component, OnInit } from '@angular/core';
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
  constructor(private proyectosService: ProyectosServiceService, private router: Router, private activaterouter: ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.activaterouter.snapshot.params['id']

    this.proyectosService.detail(id).subscribe(data => {
      this.proyecto = data
    }, err => {
      alert('No ha sido posible actualizar el proyecto')
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

}
