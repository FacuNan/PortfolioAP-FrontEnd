import { Component, OnInit, ValueProvider } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{
  miPortfolio: any;
  token = localStorage.getItem('token')
constructor (private route: Router) {}
ngOnInit(): void{


}

logout(){
  localStorage.removeItem('token')
  this.route.navigate(['/home/login'])
}
}
