import { Component, OnInit, ValueProvider } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{
  miPortfolio: any;
  token = sessionStorage.getItem('token')
  isLogged=false;
constructor (private route: Router,  public tokenService: TokenService){}
ngOnInit(): void{

if(this.tokenService.getToken()){
this.isLogged=true;
}else{
  this.isLogged=false;
}
}

logout(){
  sessionStorage.removeItem('token')
  this.route.navigate(['/home/login'])
}
}
