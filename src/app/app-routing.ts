import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {OpportunitiesComponent} from './opportunities/opportunities.component';
import {FindJobComponent} from './find-job/find-job.component';
import {PostJobComponent} from './post-job/post-job.component';
import {FindInternshipComponent} from './find-internship/find-internship.component';
import {RessourcesComponent} from './ressources/ressources.component';
import {DetailRessourceComponent} from './detail-ressource/detail-ressource.component';
import {ListeRessourcesComponent} from './liste-ressources/liste-ressources.component';
import {CategoryRessourcesComponent} from './category-ressources/category-ressources.component';
import {ForumComponent} from './forum/forum.component';
import {QuestionComponent} from './question/question.component';
import {CreateCvComponent} from './create-cv/create-cv.component';
import {CvFormComponent} from './cv-form/cv-form.component';
import {PostFormComponent} from './post-form/post-form.component';
import {DetailJobComponent} from './detail-job/detail-job.component';
import {DetailInternshipComponent} from './detail-internship/detail-internship.component';
import {CvTemplateComponent} from './cv-template/cv-template.component';



const APP_ROUTING: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/register', component: RegisterComponent},
  {path: 'opportunities', component: OpportunitiesComponent},
  {path: 'findJob', component: FindJobComponent},
  {path: 'postJob', component: PostJobComponent},
  {path: 'findInternship', component: FindInternshipComponent},
  {path: 'ressources', component: RessourcesComponent},
  {path: 'listeRessources', component: ListeRessourcesComponent},
  {path: 'detailRessource/:id', component: DetailRessourceComponent},
  {path: 'ressources/:category', component: CategoryRessourcesComponent},
  {path: 'forum/:email', component: ForumComponent},
  {path: 'question/:id/:email', component: QuestionComponent},
  {path: 'createCV', component: CreateCvComponent},
  {path: 'cvForm', component: CvFormComponent},
  {path: 'postForm', component: PostFormComponent},
  {path: 'cvTemplate', component: CvTemplateComponent},
  {path: 'findJob/detailJob/:id', component: DetailJobComponent},
  {path: 'findInternship/detailInternship/:id', component: DetailInternshipComponent}
];
export const ROUTING = RouterModule.forRoot(APP_ROUTING);
