import { Component, OnInit } from '@angular/core';
import { Praticien, Specialite, Creneau, Lieu, Utilisateur } from '../module';

import { AppConfigService } from '../app-config.service';
import { PraticienHttpService } from './praticien-http.service';
//import { AppConfigService } from './../app-config.service';
//import { SpecialiteService } from './specialite.service';
//import { CreneauService } from './creneau.service';
//import { LieuService } from './lieu.service';


@Component({
  selector: 'app-praticien',
  templateUrl: './praticien.component.html',
  styleUrls: ['./praticien.component.scss']
})
export class PraticienComponent implements OnInit {

  praticienForm: Praticien;
  civilites: Array<String> = new Array<String>();
  filtre: string;

  constructor(private appConfig: AppConfigService,private praticienService: PraticienHttpService) { 
    this.loadCivilites();
  }

  ngOnInit(): void {
  }

  search($event: any) {
    this.filtre = $event;
    this.praticienService.search(this.filtre);
  }

  list(): Array<Praticien> {
    return this.praticienService.findAll();
  }

  loadCivilites() {
    this.appConfig.findAllCivilites().subscribe(resp => {
      this.civilites = resp;
    }, err => console.log(err));
  }

  add() {
    this.praticienForm = new Praticien();
  }

  edit(id: number) {
    this.praticienService.findById(id).subscribe(response => {
      this.praticienForm = response;
    }, err => console.log(err));
  }

  save() {
    if(this.praticienForm.id) {
      this.praticienService.modify(this.praticienForm);
    } else {
      this.praticienService.create(this.praticienForm);
    }

    this.cancel();
  }

  cancel() {
    this.praticienForm = null;
  }

  remove(id: number) {
    this.praticienService.deleteById(id);
  }

}
