import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  urlSkills = "https://portfolioap-mgzz.onrender.com/skills"

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(this.urlSkills + '/lista')
  }
  public detail(id: number): Observable<Skills> {
    return this.httpClient.get<Skills>(this.urlSkills + `/detail/${id}`)
  }

  public save(skills: Skills): Observable<any> {
    return this.httpClient.post<any>(this.urlSkills + '/create', skills)
  }

  public update(id: number, skills: Skills): Observable<any> {
    return this.httpClient.put<any>(this.urlSkills + `/update/${id}`, skills)
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.urlSkills + `/delete/${id}`)
  }
}
