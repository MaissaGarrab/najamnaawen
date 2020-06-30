import { Component, OnInit } from '@angular/core';
import {Cv} from '../Model/cv';
import {CvService} from '../services/cv.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})
export class CreateCvComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToForm() {
    const link = ['cvForm'];
    this.router.navigate(link);
  }
}
