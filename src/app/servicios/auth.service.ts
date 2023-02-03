import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://reqres.in/api/login';


  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string):Observable<any>{

    let body = {
      email: email,
      password: password
    }
    return this.http.post(this.url, body)
   

  }
}
