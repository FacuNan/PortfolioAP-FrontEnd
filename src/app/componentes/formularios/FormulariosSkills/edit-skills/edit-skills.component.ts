import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {
  skill: Skills = null;
  constructor(private skillService: SkillsService, private router: Router, private activateRouter: ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id']
    this.skillService.detail(id).subscribe(data => {
      this.skill = data
    }, err => {
      alert('El skill no puede ser actualizado')
    })

  }
  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id']
    this.skillService.update(id, this.skill).subscribe(data => {
      alert('El skill fue actualizado correctamente')
      this.router.navigate(['home/skills'])
    }, err => {
      alert('El skill no puede ser actualizado')
      this.router.navigate(['home/skills'])
    })
  }


}
