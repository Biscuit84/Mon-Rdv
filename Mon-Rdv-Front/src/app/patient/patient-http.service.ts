import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from '../app-config.service';
import { Patient } from '../module';

@Injectable({
  providedIn: 'root'
})
export class PatientHttpService {
  patients: Array<Patient> = new Array<Patient>();
  patientUrl: string;

  constructor(private http: HttpClient, private appConfig: AppConfigService) {
    this.patientUrl = this.appConfig.backEndUrl + "patient/"
    this.load();
  }

  findAll(): Array<Patient> {
    return this.patients;
  }

  findById(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.patientUrl + id);
  }

  create(patient: Patient) {
    this.http.post<Patient>(this.patientUrl, patient).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  modify(patient: Patient) {
    this.http.put<Patient>(this.patientUrl + patient.id, patient).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number) {
    this.http.delete<void>(this.patientUrl + id).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  load() {
    this.http.get<Array<Patient>>(this.patientUrl).subscribe(response => {
      this.patients = response;
    }, error => console.log(error));
  }
}

