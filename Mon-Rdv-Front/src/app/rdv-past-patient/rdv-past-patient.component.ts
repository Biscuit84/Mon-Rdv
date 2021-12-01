import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../app-config.service';
import { Consultation } from '../module';
import { RdvPastPatientHttpService } from './rdv-past-patient-http.service';

@Component({
  selector: 'app-rdv-past-patient',
  templateUrl: './rdv-past-patient.component.html',
  styleUrls: ['./rdv-past-patient.component.scss']
})
export class RdvPastPatientComponent implements OnInit {

  constructor(private appConfig: AppConfigService, private rdvPastPatient:RdvPastPatientHttpService) {

   }

  ngOnInit(): void {
  }

  list(): Array<Consultation> {
    console.log(this.rdvPastPatient.findAll());
    return this.rdvPastPatient.findAll();
  }

}
