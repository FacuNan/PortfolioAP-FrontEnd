import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosServiceService } from 'src/app/servicios/proyectos-service.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{

  proyectos: Proyectos[]=[];
  isLogged = false;

constructor(private sProyectos: ProyectosServiceService, private tokenService: TokenService){}


  ngOnInit(): void {

    this.cargarProyectos(); 
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;

    }

    
  }

  cargarProyectos():void{
    this.sProyectos.lista().subscribe(data=>{
      this.proyectos=data
    })
  }



}
