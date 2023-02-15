import { TokenType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  loginForm: FormGroup = new FormGroup({});


  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  clave!: string;
  roles: string[] = [];
  errMsj!: string;



  constructor(private tokenService: TokenService, private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }

    let token = localStorage.getItem('token')

    if (token) {
      this.router.navigate(['home/perfil'])

    }

    //Validacion de formulario
    this.loginForm = this.formBuilder.group({
      correo: ['', [Validators.required]],
      clave: ['', [Validators.required]]


    })
  }


  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.SetUserName(this.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
        
      })
  }



  get emails() {
    return this.loginForm.get('correo')
  }

  get passwords() {
    return this.loginForm.get('clave')
  }









}

