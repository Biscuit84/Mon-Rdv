import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../app-config.service';
import { Adresse, Patient } from '../module';
import { PatientHttpService } from './patient-http.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  patientForm: Patient = null;
  civilites: Array<String> = new Array<String>();

  constructor(private appConfig: AppConfigService, private patientService: PatientHttpService) {
    this.loadCivilites();
  }

  ngOnInit(): void {
  }

  list(): Array<Patient> {
    return this.patientService.findAll();
  }

  loadCivilites() {
    this.appConfig.findAllCivilites().subscribe(resp => {
      this.civilites = resp;
    }, err => console.log(err));
  }

 

  add() {
    this.patientForm = new Patient();
    this.patientForm.adresse = new Adresse();
  
  }

  edit(id: number) {
    this.patientService.findById(id).subscribe(resp => {
      this.patientForm = resp;

      if (!this.patientForm.adresse) {
        this.patientForm.adresse = new Adresse();
      }
     
    }, err => console.log(err));
  }

  save() {
    if (!this.patientForm.id) {
      this.patientService.create(this.patientForm);
    } else {
      this.patientService.modify(this.patientForm);
    }
    this.patientForm = null;
  }

  cancel() {
    this.patientForm = null;
  }

  delete(id: number) {
    this.patientService.deleteById(id);
  }

}
