import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../app-config.service';
import { ConsultationHttpService } from './conultation-http.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  consultationForm: Consultation;

  constructor(private consultationService: ConsultationHttpService, private appConfig : AppConfigService ) {
   }

  ngOnInit(): void {
  }

  list(): Array<Consultation> {
    return this.consultationService.findAll();
  }

  add() {
    this.consultationForm = new Consultation();
  }

  edit(id: number) {
    this.consultationService.findById(id).subscribe(response => {
      this.consultationForm = response;
    }, err => console.log(err));
  }

  save() {
    if(this.consultationForm.id) {
      this.consultationService.modify(this.consultationForm);
    } else {
      this.consultationService.create(this.consultationForm);
    }

    this.cancel();
  }

  cancel() {
    this.consultationForm = null;
  }

  remove(id: number) {
    this.consultationService.deleteById(id);
  }

}
