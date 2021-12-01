import { Component } from '@angular/core';
import { Utilisateur } from './module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon-Rdv-Front';
  utilisateurConnect:Utilisateur;
}
