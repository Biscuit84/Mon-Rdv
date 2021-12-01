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

  utilisateurForm: Utilisateur = null;
  civilites: Array<String> = new Array<String>();

  constructor(private appConfig: AppConfigService, private utilisateurService: UtilisateurHttpService) {
    
  }

  ngOnInit(): void {
  }

  list(): Array<Utilisateur> {
    return this.utilisateurService.findAll();
  }

  add() {
    this.utilisateurForm = new Utilisateur();
    
  
  }

  edit(id: number) {
    this.utilisateurService.findById(id).subscribe(resp => {
      this.utilisateurForm = resp;

      
     
    }, err => console.log(err));
  }

  save() {
    if (!this.utilisateurForm.id) {
      this.utilisateurService.create(this.utilisateurForm);
    } else {
      this.utilisateurService.modify(this.utilisateurForm);
    }
    this.utilisateurForm = null;
  }

  cancel() {
    this.utilisateurForm = null;
  }

  delete(id: number) {
    this.utilisateurService.deleteById(id);
  }

  auth() {
    this.utilisateurService.auth(new ConnexionDTO(this.utilisateurForm.email,this.utilisateurForm.motDePasse));
  }

}