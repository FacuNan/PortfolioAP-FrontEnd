import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cargado: boolean = true;
  ngOnInit(): void {
    this.cargado = true;
    
  
  }


}
