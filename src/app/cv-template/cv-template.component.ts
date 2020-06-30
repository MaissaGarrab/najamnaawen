import { Component, OnInit } from '@angular/core';
import {Cv} from '../Model/cv';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-cv-template',
  templateUrl: './cv-template.component.html',
  styleUrls: ['./cv-template.component.css']
})
export class CvTemplateComponent implements OnInit {
  cv: Cv;
  erreur: string;
  constructor(private cvReady: CvService) { }

  ngOnInit(): void {
    this.cvReady.getCv().subscribe(cvs => this.cv = cvs, error => this.erreur = <any>error);
  }

}
