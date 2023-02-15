import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HtmlParser, Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  url = 'http://localhost:8080/auth/';


  constructor(private http: HttpClient, private router: Router) { }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.http.post<JwtDto>(this.url + 'login', loginUsuario)
  }


  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.http.post<any>(this.url + 'nuevo', nuevoUsuario)

  }
}
