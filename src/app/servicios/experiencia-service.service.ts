import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaServiceService {
  explab = "http://localhost:8080/experienciaLaboral/";



  constructor(private httpClient: HttpClient) { }


  public lista():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.explab + 'lista')

  }


  
  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.explab + `detail/${id}`);
  } 

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.explab + 'create', experiencia);
  }

  public update(id: number, experiencia: Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.explab + `update/${id}`, experiencia);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.explab + `delete/${id}`)
  }

}
