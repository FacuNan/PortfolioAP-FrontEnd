import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosServiceService } from 'src/app/servicios/proyectos-service.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {

  nombreP = ' ';
  img = ' ';
  descripcion = ' ';
  isLogged = false;

  constructor(private tokenService: TokenService, private sProyectos: ProyectosServiceService) { }
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  agregarProyecto(): void {
    const proyect = new Proyectos(this.nombreP, this.img, this.descripcion)

    this.sProyectos.save(proyect).subscribe(data => {
      alert('el proyecto se agrego correctamente')
    }, err => {
      alert('El proyecto no se pudo agregar');
    })
  }


}
