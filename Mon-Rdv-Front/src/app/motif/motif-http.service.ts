import { Injectable } from '@angular/core';
import { Motif } from '../module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfigService } from '../app-config.service';

@Injectable({
  providedIn: 'root'
})
export class MotifHttpService {

  motifs: Array<Motif> = new Array<Motif>();
  motifUrl: string;

  constructor(private http: HttpClient, private appConfig: AppConfigService) {
    this.motifUrl = this.appConfig.backEndUrl + "motif/"
    this.load();
  }

  findAll(): Array<Motif> {
    return this.motifs;
  }

  search(filtre: string) {
    if (filtre) {
      this.http.get<Array<Motif>>(this.motifUrl + "search/" + filtre).subscribe(response => {
        this.motifs = response;
      }, error => console.log(error));
    } else {
      this.load();
    }
  }

  findById(id: number): Observable<Motif> {
    return this.http.get<Motif>(this.motifUrl + id);
  }

  create(motif: Motif) {
    this.http.post<Motif>(this.motifUrl, motif).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  modify(motif: Motif) {
    this.http.put<Motif>(this.motifUrl + motif.id, motif).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number) {
    this.http.delete<void>(this.motifUrl + id).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  load() {
    this.http.get<Array<Motif>>(this.motifUrl).subscribe(response => {
      this.motifs = response;
    }, error => console.log(error));
  }
}
