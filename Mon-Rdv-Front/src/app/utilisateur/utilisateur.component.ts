import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../app-config.service';
import { Adresse, ConnexionDTO, Utilisateur } from '../module';
import { UtilisateurHttpService } from './utilisateur-http.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  connexionDTOForm: ConnexionDTO = new ConnexionDTO();
  civilites: Array<String> = new Array<String>();
  erreur:boolean=false;

  constructor( private utilisateurService: UtilisateurHttpService) {
    
  }

  ngOnInit(): void {
  }

  

  auth() {
    this.utilisateurService.auth(this.connexionDTOForm);
    this.erreur=this.utilisateurService.erreur;
  }

}