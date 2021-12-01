import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { PraticienComponent } from './praticien/praticien.component';
import { MotifComponent } from './motif/motif.component';
import { PatientComponent } from './patient/patient.component';

@NgModule({
  declarations: [
    ConsultationComponent,
    AppComponent,
    PatientComponent,
    PraticienComponent,
    MotifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
