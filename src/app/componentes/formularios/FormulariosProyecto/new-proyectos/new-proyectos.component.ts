import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosServiceService } from 'src/app/servicios/proyectos-service.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {


  nombreP = '';
  img = '';
  descripcion = '';
  isLogged = false;
url ='';

  validacionProyectos: FormGroup = new FormGroup({});

  constructor(private tokenService: TokenService, private sProyectos: ProyectosServiceService, private router: Router, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.validacionProyectos = this.formBuilder.group({
      nombreProyecto: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      imgPro: ['',[Validators.required]],
      descripcionPro:['', Validators.compose([Validators.required, Validators.maxLength(200)])],
      link:['', Validators.compose([Validators.required])]
    })
  }

  agregarProyecto(): void {
    const proyect = new Proyectos(this.nombreP, this.img, this.descripcion, this.url)

    this.sProyectos.save(proyect).subscribe(data => {
      alert('el proyecto se agrego correctamente')
      this.router.navigate(['/home/proyectos'])
    }, err => {
      alert('El proyecto no se pudo agregar');
      this.router.navigate(['/home/proyectos'])
    })
  }

  get nombreProyecto(){
    return this.validacionProyectos.get('nombreProyecto')
  }

  get imgPro(){
    return this.validacionProyectos.get('imgPro')
  }

  get descripcionPro(){
    return this.validacionProyectos.get('descripcionPro')
  }

  get link(){
    return this.validacionProyectos.get('link')
  }


}
