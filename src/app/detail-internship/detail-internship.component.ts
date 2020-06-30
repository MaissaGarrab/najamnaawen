import { Component, OnInit } from '@angular/core';
import {Opportunity} from '../Model/opportunity';
import {OpportunityService} from '../services/opportunity.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-internship',
  templateUrl: './detail-internship.component.html',
  styleUrls: ['./detail-internship.component.css']
})
export class DetailInternshipComponent implements OnInit {

  opportunity: Opportunity;
  erreur: string;

  constructor(private opportunityService: OpportunityService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    this.opportunityService.getOpportunitiesById(id).subscribe((opportunity) => this.opportunity = opportunity,
      error => this.erreur = <any>error);
  }

}
