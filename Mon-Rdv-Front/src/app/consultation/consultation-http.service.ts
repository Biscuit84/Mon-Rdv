import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from '../app-config.service';
import { Consultation, Praticien } from '../module';

@Injectable({
  providedIn: 'root'
})
export class ConsultationHttpService{

  consultations: Array<Consultation>=new Array<Consultation>();
  backUrl: string;
  praticiens: Array<Praticien> = new Array<Praticien>();
  

  constructor(private http :HttpClient, private appConfig:AppConfigService) { 
    this.backUrl=this.appConfig.backEndUrl+ "praticien/"; 
    this.load();
    
   
  }
 

  findAllp(): Array<Consultation>{
    return this.consultations;
  }

  findAll() : Array<Praticien>{
    return this.praticiens;
  }

  findPraticienById(id:number): Observable<Praticien>{
    return this.http.get<Praticien>(this.backUrl + id);
  }

  load() {
    this.http.get<Array<Praticien>>(this.backUrl).subscribe(response => {
      this.praticiens = response;
    }, error => console.log(error));
  }
 

 

}
