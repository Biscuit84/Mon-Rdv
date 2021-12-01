import { Component, OnInit } from '@angular/core';
import {Specialite } from '../module';

import { SpecialiteHttpService } from './specialite-http.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.scss']
})
export class SpecialiteComponent implements OnInit {

  specialiteForm: Specialite;
  filtre: string;

  constructor(private specialiteService: SpecialiteHttpService) { }

  ngOnInit(): void {
  }

  search($event: any) {
    this.filtre = $event;
    this.specialiteService.search(this.filtre);
  }

  list(): Array<Specialite> {
    return this.specialiteService.findAll();
  }

  add() {
    this.specialiteForm = new Specialite();
  }

  edit(id: number) {
    this.specialiteService.findById(id).subscribe(response => {
      this.specialiteForm = response;
    }, err => console.log(err));
  }

  save() {
    if(this.specialiteForm.id) {
      this.specialiteService.modify(this.specialiteForm);
    } else {
      this.specialiteService.create(this.specialiteForm);
    }

    this.cancel();
  }

  cancel() {
    this.specialiteForm = null;
  }

  remove(id: number) {
    this.specialiteService.deleteById(id);
  }

}
