import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from '../app-config.service';
import { Creneau } from '../module';

@Injectable({
  providedIn: 'root'
})
export class CreneauHttpService {

  creneauUrl: string;
  creneaux: Array<Creneau>=new Array<Creneau>();

  constructor(private http :HttpClient, private appConfig:AppConfigService) { 
    this.creneauUrl=this.appConfig.backEndUrl + "creneau/"
    this.load();
  }
  findAll(): Array<Creneau>{
    return this.creneaux;
  }

  findById(id:number): Observable<Creneau>{
    return this.http.get<Creneau>(this.creneauUrl + id);
  }

  create(creneau:Creneau){
    this.http.post<Creneau>(this.creneauUrl, creneau).subscribe(resp => {
      this.load();
    },err => console.log(err));
  }

  modify(creneau:Creneau){
    this.http.put<Creneau>(this.creneauUrl + creneau.id, creneau).subscribe(resp => {
      this.load();
    },err => console.log(err));
  }

  deleteById(id:number){
    this.http.delete<void>(this.creneauUrl + id).subscribe(resp => {
      this.load();
    },err => console.log(err));
  }

  load(){
    this.http.get<Array<Creneau>>(this.creneauUrl).subscribe(response => {
      this.creneaux = response;
    }, error => console.log(error));
  }
}
