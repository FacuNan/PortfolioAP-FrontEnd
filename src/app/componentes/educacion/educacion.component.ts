import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/servicios/educacion-service.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];

  isLogged = false;

  constructor(private educacionService: EducacionServiceService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarEducacion();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false
    }


  }
  cargarEducacion(): void {
    this.educacionService.lista().subscribe(data => {
      this.educacion = data;
    })
  }

  Delete(id?:number){
    if(id != undefined)
    this.educacionService.delete(id).subscribe(data =>{
      this.cargarEducacion();
    }, err =>{
      alert('No se ha podido eliminar la educacion')

    })
  }

}
