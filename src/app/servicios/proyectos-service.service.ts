import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosServiceService {

  proyectoUrl = "http://localhost:8080/proyectos/"

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.proyectoUrl + 'lista')
  }

  public detail(id: number):Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.proyectoUrl + `detail/${id}`);
  }

  public save(proyectos: Proyectos):Observable<any>{
    return this.httpClient.post<any>(this.proyectoUrl + 'create', proyectos);
  }

  public update(id:number, proyectos: Proyectos):Observable<any>{
    return this.httpClient.put<any>(this.proyectoUrl + `update/${id}`, proyectos);
  }
  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.proyectoUrl + `delete/${id}`)
  }
}
