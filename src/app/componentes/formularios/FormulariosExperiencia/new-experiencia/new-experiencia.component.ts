import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/servicios/experiencia-service.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit{
  nombreE= ' ';
institucion= ' ';
descripcion=' ';
fechaInicio = ' ';
fechaTerminacion = ' ';

isLogged = false;


constructor(private sExperiencia: ExperienciaServiceService, private tokenService: TokenService, private router: Router){}

ngOnInit(): void {
  if(this.tokenService.getToken()){
    this.isLogged = true
  }else{
    this.isLogged= false
  }
}

agregarExperiencia():void{
const exp= new Experiencia(this.nombreE, this.institucion, this.descripcion, this.fechaInicio, this.fechaTerminacion)
  
this.sExperiencia.save(exp).subscribe(data => {
  alert('Experiencia añadida')
  this.router.navigate(['home/perfil'])

}, err=>{
  alert('No se ha podido agregar la experiencia')
  this.router.navigate(['home/perfil'])
})
}





}
