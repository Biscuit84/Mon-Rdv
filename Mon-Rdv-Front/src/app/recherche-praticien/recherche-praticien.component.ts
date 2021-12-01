import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../app-config.service';
import { Praticien } from '../module';

@Component({
  selector: 'app-recherche-praticien',
  templateUrl: './recherche-praticien.component.html',
  styleUrls: ['./recherche-praticien.component.scss']
})
export class RecherchePraticienComponent implements OnInit {

  recherchePraticienUrl : string;

  constructor(private http: HttpClient,private appConfig: AppConfigService,) { 
    this.recherchePraticienUrl=this.appConfig.backEndUrl + "recherchePraticien/";
  }

  ngOnInit(): void {
  }

  /*search(filtre: string) {
    if (filtre) {
      this.http.get<Array<Praticien>>(this.recherchePraticienUrl + "search/" + filtre).subscribe(response => {
        this.matieres = response;
      }, error => console.log(error));
    } else {
      this.load();
    }
  }*/
}
