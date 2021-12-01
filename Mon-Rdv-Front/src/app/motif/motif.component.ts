import { Component, OnInit } from '@angular/core';
import {Motif } from '../module';

import { MotifHttpService } from './motif-http.service';

@Component({
  selector: 'app-motif',
  templateUrl: './motif.component.html',
  styleUrls: ['./motif.component.scss']
})
export class MotifComponent implements OnInit {

  motifForm: Motif;
  filtre: string;

  constructor(private motifService: MotifHttpService) { }

  ngOnInit(): void {
  }

  search($event: any) {
    this.filtre = $event;
    this.motifService.search(this.filtre);
  }

  list(): Array<Motif> {
    return this.motifService.findAll();
  }

  add() {
    this.motifForm = new Motif();
  }

  edit(id: number) {
    this.motifService.findById(id).subscribe(response => {
      this.motifForm = response;
    }, err => console.log(err));
  }

  save() {
    if(this.motifForm.id) {
      this.motifService.modify(this.motifForm);
    } else {
      this.motifService.create(this.motifForm);
    }

    this.cancel();
  }

  cancel() {
    this.motifForm = null;
  }

  remove(id: number) {
    this.motifService.deleteById(id);
  }

}
