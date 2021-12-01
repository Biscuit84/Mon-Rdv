import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { PatientComponent } from './patient/patient.component';
import { CreneauComponent } from './creneau/creneau.component';
import { LieuComponent } from './lieu/lieu.component';
import { MotifComponent } from './motif/motif.component';
import { PraticienComponent } from './praticien/praticien.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ConsultationHttpService } from './consultation/conultation-http.service';
import { CreneauHttpService } from './creneau/creneau-http.service';
import { LieuHttpService } from './lieu/lieu-http.service';
import { MotifHttpService } from './motif/motif-http.service';
import { PatientHttpService } from './patient/patient-http.service';
import { PraticienHttpService } from './praticien/praticien-http.service';
import { SpecialiteHttpService } from './specialite/specialite-http.service';
import { UtilisateurHttpService } from './utilisateur/utilisateur-http.service';

@NgModule({
  declarations: [
    AppComponent,
    ConsultationComponent,
    PatientComponent,
    CreneauComponent,
    LieuComponent,
    MotifComponent,
    PraticienComponent,
    SpecialiteComponent,
    UtilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ConsultationHttpService,CreneauHttpService,LieuHttpService,MotifHttpService,PatientHttpService,PraticienHttpService,SpecialiteHttpService,UtilisateurHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
