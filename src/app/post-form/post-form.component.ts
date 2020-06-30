import {Component, OnInit, ViewChild} from '@angular/core';
import {Opportunity} from '../Model/opportunity';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  opportunities: Opportunity[];
  opportunity: Opportunity;
  PostForm: FormGroup;
  title: string;
  domain: string;
  link: string;
  published_on: string;
  description: string;

  @ViewChild('rform') RegisterFormDirective;
  formErrors = {
    'title': '',
    'domain': '',
    'link': '',
    'published_on': '',
    'description': ''
  };
  validationMessages = {
    'title': {
      'required': 'title required.',
      'minlength': 'at least 2 charachters.',
      'maxlength': 'max length 25.'
    },
    'domain': {
      'required': 'domain required.',
      'minlength': 'at least 2 charachters.',
      'maxlength': 'max length 25.'
    },
    'link': {
      'required': 'link required.'
    },
    'published_on': {
      'required': 'published_on required.',
      'minlength': 'at least 2 charachters.',
      'maxlength': 'max length 25.'
    },
    'description': {
      'required': 'password required.'
    }
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmitAdd() {
    console.log(this.PostForm.value);
    this.PostForm.reset({
      title: '',
      domain: '',
      link: '',
      published_on: '',
      description: ''
    });
  }
  addOpportunity(credentials) {
    this.opportunity = new Opportunity(0, credentials.title, 0, 1, credentials.domain,
      credentials.link, credentials.description, credentials.published_on);
  }
}
