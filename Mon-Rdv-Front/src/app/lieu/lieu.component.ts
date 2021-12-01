import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../app-config.service';
import { Lieu } from '../module';
import { LieuHttpService } from './lieu-http.service';

@Component({
  selector: 'app-lieu',
  templateUrl: './lieu.component.html',
  styleUrls: ['./lieu.component.scss']
})
export class LieuComponent implements OnInit {
  lieuForm: Lieu;
  constructor(private lieuService: LieuHttpService , private appConfig : AppConfigService) { }

  ngOnInit(): void {
  }
  list(): Array <Lieu> {
    return this.lieuService.findAll();
  }

  add() {
    this.lieuForm = new Lieu();
  }

  edit(id: number) {
    this.lieuService.findById(id).subscribe(response => {
      this.lieuForm = response;
    }, err => console.log(err));
  }

  save() {
    if(this.lieuForm.id) {
      this.lieuService.modify(this.lieuForm);
    } else {
      this.lieuService.create(this.lieuForm);
    }

    this.cancel();
  }

  cancel() {
    this.lieuForm = null;
  }

  remove(id: number) {
    this.lieuService.deleteById(id);
  }

}
