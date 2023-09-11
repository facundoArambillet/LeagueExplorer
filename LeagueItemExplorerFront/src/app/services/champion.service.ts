import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChampionData } from '../models/champion-data';
import { Observable } from 'rxjs';
import { ChampionDataExtended } from '../models/champion-data-extended';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  private email: string = "test@test.com";
  private password: string = "123456789";
  
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Map<string,ChampionData>> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.email + ':' + this.password)
    })
    return this.http.get<Map<string,ChampionData>>("http://localhost:8080/app/champion", { headers: headers, withCredentials: true });
  }
  public getByName(name : String): Observable<Map<string,ChampionDataExtended>> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.email + ':' + this.password)
    })
    return this.http.get<Map<string,ChampionDataExtended>>(`http://localhost:8080/app/champion/${name}`, { headers: headers, withCredentials: true });
  }
  public getAllTags(): Observable<Set<string>> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.email + ':' + this.password)
    })
    return this.http.get<Set<string>>("http://localhost:8080/app/champion/tags", { headers: headers, withCredentials: true });
  }
  public getByTag(tag : String): Observable<ChampionData[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.email + ':' + this.password)
    })
    return this.http.get<ChampionData[]>(`http://localhost:8080/app/champion/tags/${tag}`, { headers: headers, withCredentials: true });
  }
}
