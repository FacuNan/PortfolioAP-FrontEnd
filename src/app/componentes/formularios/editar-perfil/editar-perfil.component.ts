import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/PersonaModel';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  validacionPerfil: FormGroup = new FormGroup({})
  persona: Persona = null;

  constructor(private personaService: PersonaService, private formBuilder: FormBuilder, private router: Router, private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.activateRouter.snapshot.params['id']
    this.personaService.detail(id).subscribe(data => {
      this.persona = data
    }, err => {
      alert('La persona no puede ser modificada')
      this.router.navigate(['/home/perfil'])
    })

    this.validacionPerfil = this.formBuilder.group({
      nombre: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      apellido: ['', [Validators.required, Validators.maxLength(50)]],
      img: ['', [Validators.compose([Validators.required, Validators.maxLength(300)])]],
      descripcion: ['', [Validators.required, Validators.maxLength(200)]]

    })



  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];

    this.personaService.update(id, this.persona).subscribe(data => {
      alert('Persona actualizada correctamente')
      this.router.navigate([''])
    }, err => {
      alert('No ha sido posible actualizar a la persona')
    })

  }

  get nombre() {
    return this.validacionPerfil.get('nombre');
  }

  get apellido() {
    return this.validacionPerfil.get('apellido');
  }

  get img() {
    return this.validacionPerfil.get('img')
  }

  get descripcion() {
    return this.validacionPerfil.get('descripcion')
  }

}
