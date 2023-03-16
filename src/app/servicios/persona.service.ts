import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/PersonaModel';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
url = 'https://portfolioap-mgzz.onrender.com/personas/'
  constructor(private http: HttpClient) { }



    public getPersona():Observable<Persona>{
      return this.http.get<Persona>(this.url + 'traer/perfil');
    }

    public detail(id: number):Observable<Persona>{
      return this.http.get<Persona>(this.url + `detail/${id}`)
    }

    public update(id: number, persona: Persona):Observable<any>{
      return this.http.put<any>(this.url + `update/${id}`, persona)
    }

}