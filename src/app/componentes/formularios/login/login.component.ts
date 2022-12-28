import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email: string = '';
  password : string = '';
  constructor(private route: Router, private authSevice: AuthService) { }
  ngOnInit(): void {
    let token = localStorage.getItem('token')
  }

  loginUser() {
    this.authSevice.login(this.email, this.password).subscribe((response)=>{
      if(response.token){
        localStorage.setItem('token', response.token)
        this.route.navigate(['']);
      }
    })
  }

 
}

