import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { AddJobsComponent } from './add-jobs/add-jobs.component';
import { RecruiterLoginComponent } from './recruiter-login/recruiter-login.component';
import { ApplicantLoginComponent } from './applicant-login/applicant-login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    JobDetailsComponent,
    AddJobsComponent,
    RecruiterLoginComponent,
    ApplicantLoginComponent,
    RegisterComponent,
    SearchComponent,
    CandidateListComponent,
    CandidateDetailComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
