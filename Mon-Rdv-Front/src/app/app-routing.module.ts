import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultationComponent } from './consultation/consultation.component';
import { CreneauComponent } from './creneau/creneau.component';
import { LieuComponent } from './lieu/lieu.component';
import { MotifComponent } from './motif/motif.component';
import { PatientComponent } from './patient/patient.component';
import { PraticienComponent } from './praticien/praticien.component';
import { SpecialiteComponent } from './specialite/specialite.component';

const routes: Routes = [
  {path : "consultation", component: ConsultationComponent},
  {path : "creneau", component: CreneauComponent},
  {path : "lieu", component: LieuComponent},
  {path : "motif", component: MotifComponent},
  {path : "patient", component: PatientComponent},
  {path : "praticien", component: PraticienComponent},
  {path : "specialite", component: SpecialiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
