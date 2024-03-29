import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from '../app-config.service';
import { Lieu } from '../module';

@Injectable({
  providedIn: 'root'
})
export class LieuHttpService {
  lieuUrl: string;
  lieux: Array<Lieu>=new Array<Lieu>();

  constructor(private http :HttpClient, private appConfig:AppConfigService) { 
    this.lieuUrl=this.appConfig.backEndUrl + "lieu/"
    this.load();
  }
  findAll(): Array<Lieu>{
    return this.lieux;
  }

  findById(id:number): Observable<Lieu>{
    return this.http.get<Lieu>(this.lieuUrl + id);
  }

  create(lieu:Lieu){
    this.http.post<Lieu>(this.lieuUrl, lieu).subscribe(resp => {
      this.load();
    },err => console.log(err));
  }

  modify(lieu:Lieu){
    this.http.put<Lieu>(this.lieuUrl + lieu.id, lieu).subscribe(resp => {
      this.load();
    },err => console.log(err));
  }

  deleteById(id:number){
    this.http.delete<void>(this.lieuUrl + id).subscribe(resp => {
      this.load();
    },err => console.log(err));
  }

  load(){
    this.http.get<Array<Lieu>>(this.lieuUrl).subscribe(response => {
      this.lieux = response;
    }, error => console.log(error));
  }
}
