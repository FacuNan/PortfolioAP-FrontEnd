import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skills[] = []
  isLogged = false;

  constructor(private router: Router, private skillsService: SkillsService, private tokenService: TokenService) { }
  ngOnInit(): void {
    this.cargarSkills();

    if (this.tokenService.getToken()) {
      this.isLogged = true
    } else {
      this.isLogged = false
    }

  }

  cargarSkills(): void {
    this.skillsService.lista().subscribe(data => {
      this.skills = data;
    })
  }

  Delete(id: number): void {
    if (id != undefined) {
      this.skillsService.delete(id).subscribe(data => {
        this.cargarSkills();
      }, err => {
        alert('No ha sido posible eliminar el skill')
      })

    }
  }

}
