import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  loginForm: FormGroup = new FormGroup({});

  constructor(private route: Router, private authSevice: AuthService, private formBuilder:FormBuilder) { }
  ngOnInit(): void {
    let token = localStorage.getItem('token')

    if (token) {
      this.route.navigate(['home/perfil'])
     
    }
    this.loginForm= this.formBuilder.group({
      correo:['',[ Validators.required, Validators.email]],
     clave:['', [Validators.required]]


    })
  }

  get emails(){
    return this.loginForm.get('correo')
  }

  get passwords(){
    return this.loginForm.get('clave')
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

