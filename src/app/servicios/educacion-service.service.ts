import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';


@Injectable({
  providedIn: 'root'
})
export class EducacionServiceService {
edu = "https://portfolioap-mgzz.onrender.com/educacion/"
  constructor(private httpclient: HttpClient) { }

  public lista():Observable<Educacion[]>{
    return this.httpclient.get<Educacion[]>(this.edu + 'lista')
  }

  public detail(id: number):Observable<Educacion>{
    return this.httpclient.get<Educacion>(this.edu + `detail/${id}`)
  }

  public save(educacion: Educacion):Observable<any>{
    return this.httpclient.post<any>(this.edu + 'create', educacion);
  }


  public update(id: number, educacion: Educacion):Observable<any>{
    return this.httpclient.put<any>(this.edu + `update/${id}`, educacion);
  }

  public delete(id:number):Observable<any>{
    return this.httpclient.delete<any>(this.edu + `delete/${id}`)
  }

 
}
