import { Component, OnInit } from '@angular/core';
import {Opportunity} from '../Model/opportunity';
import {OpportunityService} from '../services/opportunity.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-find-internship',
  templateUrl: './find-internship.component.html',
  styleUrls: ['./find-internship.component.css']
})
export class FindInternshipComponent implements OnInit {
  iOpportunities: Opportunity[];
  erreur: string;

  constructor(private opportunity: OpportunityService,
              private router: Router) { }

  ngOnInit(): void {
    this.opportunity.getOpportunitiesByCategory(2).subscribe(opportunities => this.iOpportunities = opportunities,
      error => this.erreur = <any>error);
  }
  detail(id: number) {
    const link = ['detailInternship', id];
    this.router.navigate(link);
  }
  navigateToPost() {
    const link = ['postJob'];
    this.router.navigate(link);
  }
  navigateToCreateCV() {
    const link = ['createCV'];
    this.router.navigate(link);
  }
}
