import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  validacionPerfil: FormGroup = new FormGroup({})
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.validacionPerfil = this.formBuilder.group({
      nombre: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      apellido: ['', [Validators.required, Validators.maxLength(50)]],
      img: ['', [Validators.compose([Validators.required, Validators.maxLength(300)])]],
      descripcion: ['', [Validators.required, Validators.maxLength(200)]]

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

  get descripcion(){
    return this.validacionPerfil.get('descripcion')
  }

}
