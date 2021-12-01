import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  backEndUrl: string = "http://localhost:8080/";

  constructor(private http : HttpClient) { }

  findAllCivilites(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backEndUrl + "civilites");
  }
}
