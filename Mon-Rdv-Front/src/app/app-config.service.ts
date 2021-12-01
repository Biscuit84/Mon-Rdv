import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  backEndUrl: string = "http://localhost:8080/";

  constructor(private http : HttpClient) { }

  findAllCivilites(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backEndUrl + "civilites");
  }

  findAllSeteurs(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backEndUrl + "secteurs");
  }
  
  findAllTypes(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backEndUrl + "types");
  }
}
