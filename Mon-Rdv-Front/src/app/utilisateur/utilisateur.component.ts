import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../app-config.service';
import { Adresse, Utilisateur } from '../module';
import { UtilisateurHttpService } from './utilisateur-http.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  utlisateurForm: Utilisateur = null;
  civilites: Array<String> = new Array<String>();

  constructor(private appConfig: AppConfigService, private utilisateurService: UtilisateurHttpService) {
    
  }

  ngOnInit(): void {
  }

  list(): Array<Utilisateur> {
    return this.utilisateurService.findAll();
  }

  add() {
    this.utlisateurForm = new Utilisateur();
    
  
  }

  edit(id: number) {
    this.utilisateurService.findById(id).subscribe(resp => {
      this.utlisateurForm = resp;

      
     
    }, err => console.log(err));
  }

  save() {
    if (!this.utlisateurForm.id) {
      this.utilisateurService.create(this.utlisateurForm);
    } else {
      this.utilisateurService.modify(this.utlisateurForm);
    }
    this.utlisateurForm = null;
  }

  cancel() {
    this.utlisateurForm = null;
  }

  delete(id: number) {
    this.utilisateurService.deleteById(id);
  }

}