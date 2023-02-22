import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
  nombre = '';
  porcentaje: number;
  radius: number;
  colorExterno = '';
  colorInterno = '';

  constructor(private skillsService: SkillsService, private router: Router) { }
  ngOnInit(): void {

  }

  agregarSkills(): void {
    const skills = new Skills(this.nombre, this.porcentaje, this.radius, this.colorExterno, this.colorInterno)

    this.skillsService.save(skills).subscribe(data => {
      alert('El Skill fue añadido con exito')
      this.router.navigate(['home/skills'])
    }, er => {
      alert('No se ha podido añadir el skill')
      this.router.navigate(['home/skills'])
    })


  }



}
