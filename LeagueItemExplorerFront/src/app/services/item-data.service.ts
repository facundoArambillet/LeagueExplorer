import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ItemData } from '../models/item-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemDataService {
  private email: string = "test@test.com";
  private password: string = "123456789";
  
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Map<string,ItemData>> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.email + ':' + this.password)
    })
    return this.http.get<Map<string,ItemData>>("http://localhost:8080/app/itemData", { headers: headers, withCredentials: true });
  }
  public getAllTags(): Observable<String[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.email + ':' + this.password)
    })
    return this.http.get<String[]>("http://localhost:8080/app/itemTree/tags", { headers: headers, withCredentials: true });
  }
  public getByName(name : String): Observable<Map<string,ItemData>> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.email + ':' + this.password)
    })
    return this.http.get<Map<string,ItemData>>(`http://localhost:8080/app/itemData/name/${name}`, { headers: headers, withCredentials: true });
  }
  public getByTag(tag : String): Observable<ItemData[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.email + ':' + this.password)
    })
    return this.http.get<ItemData[]>(`http://localhost:8080/app/itemData/${tag}`, { headers: headers, withCredentials: true });
  }
}
