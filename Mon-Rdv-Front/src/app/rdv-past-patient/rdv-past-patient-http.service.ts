import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '../app-config.service';
import { Consultation, Patient } from '../module';

@Injectable({
  providedIn: 'root'
})
export class RdvPastPatientHttpService {
  patient: Patient;
  consultations: Array<Consultation> = new Array<Consultation>();
  rdvPastPatientUrl: string;
  idPatient: number = 5;

  constructor(private http: HttpClient, private appConfig: AppConfigService) {
    this.rdvPastPatientUrl = this.appConfig.backEndUrl + "consultation/"
    this.load();
  }

  load() {
    this.http.get<Array<Consultation>>(this.rdvPastPatientUrl + this.idPatient + "/AncienneConsultPatient").subscribe(resp => {
      this.consultations = resp;
    }, error => console.log(error));
  }

  findAll() :Array<Consultation> {
    return this.consultations;
  }


}
