import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from '../app-config.service';
import { Consultation } from '../module';

@Injectable({
  providedIn: 'root'
})
export class ConsultationHttpService{

  consultations: Array<Consultation>=new Array<Consultation>();
  consultationUrl: string;

  constructor(private http :HttpClient, private appConfig:AppConfigService) { 
    this.consultationUrl=this.appConfig.backEndUrl + "consultation/"
    this.load();
  }
 

  findAll(): Array<Consultation>{
    return this.consultations;
  }

  findById(id:number): Observable<Consultation>{
    return this.http.get<Consultation>(this.consultationUrl + id);
  }

  create(consultation:Consultation){
    this.http.post<Consultation>(this.consultationUrl, consultation).subscribe(resp => {
      this.load();
    },err => console.log(err));
  }

  modify(consultation:Consultation){
    this.http.put<Consultation>(this.consultationUrl + consultation.id, consultation).subscribe(resp => {
      this.load();
    },err => console.log(err));
  }

  deleteById(id:number){
    this.http.delete<void>(this.consultationUrl + id).subscribe(resp => {
      this.load();
    },err => console.log(err));
  }

  load(){
    this.http.get<Array<Consultation>>(this.consultationUrl).subscribe(response => {
      this.consultations = response;
    }, error => console.log(error));
  }

}
