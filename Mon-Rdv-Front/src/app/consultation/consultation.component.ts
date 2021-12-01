import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../app-config.service';
import { Consultation, Praticien } from '../module';
import { ConsultationHttpService } from './consultation-http.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  consultationForm: Consultation;
  praticienForm : Praticien;

  constructor(private consultationService: ConsultationHttpService, private appConfig : AppConfigService ) {
   }

  ngOnInit(): void {
  }

  list(): Array<Praticien> {
    return this.consultationService.findAll();
  }

  add() {
    this.consultationForm = new Consultation();
  }
  monPraticien(id : number) {
    this.consultationService.findPraticienById(id).subscribe(resp => {
      this.praticienForm = resp;

           
    }, err => console.log(err));
  };

  }

  

  

  


