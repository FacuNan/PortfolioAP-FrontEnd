import { Component, OnInit } from '@angular/core';
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

  constructor(private Sexperiencia: ExperienciaServiceService, private router: Router, private activateRouter: ActivatedRoute) { }
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
  }
  
  onUpdate(): void{
    const id = this.activateRouter.snapshot.params['id'];
    this.Sexperiencia.update(id, this.explab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    )
  }

}
