import { Injectable } from '@angular/core';
import {Cv} from '../Model/cv';
import {Observable, of} from 'rxjs';
import {Opportunity} from '../Model/opportunity';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cv: Cv;

  constructor() {
    this.cv = new Cv('Garrab', 'Maïssa', 'student', 'cite olympique', 'maissa@gmail.com',
      25896314, 'java c++ linux', 'frensh english', 'none', 'INSAT');
  }
  getCv(): Observable<Cv> {
    return of(this.cv);
  }
}
