import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from '../app-config.service';
import { Utilisateur, ConnexionDTO } from '../module';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurHttpService {

  utilisateurs: Array<Utilisateur> = new Array<Utilisateur>();
  utilisateurUrl: string;
  erreur:boolean=false;

  constructor(private http: HttpClient, private appConfig: AppConfigService) {
    this.utilisateurUrl = this.appConfig.backEndUrl + "utilisateur/"
    // this.load();
  }

  findAll(): Array<Utilisateur> {
    return this.utilisateurs;
  }

  findById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.utilisateurUrl + id);
  }


  create(utilisateur: Utilisateur) {
    this.http.post<Utilisateur>(this.utilisateurUrl, utilisateur).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  modify(utilisateur: Utilisateur) {
    this.http.put<Utilisateur>(this.utilisateurUrl + utilisateur.id, utilisateur).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number) {
    this.http.delete<void>(this.utilisateurUrl + id).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  load() {
    this.http.get<Array<Utilisateur>>(this.utilisateurUrl).subscribe(response => {
      this.utilisateurs = response;
    }, error => console.log(error));
  }

  auth(connexionDTO:ConnexionDTO){
    this.http.post<Utilisateur>(this.utilisateurUrl + 'connexion', connexionDTO).subscribe(response => {
      sessionStorage.setItem('user',JSON.stringify(response));
    this.erreur=false;
  }, err => {
    this.erreur=true;
    console.log(err);});
  }
}