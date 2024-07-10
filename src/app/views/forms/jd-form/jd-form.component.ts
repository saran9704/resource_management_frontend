import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServicesService } from '../../login-module/shared/login-services.service';
import { JobdescriptionService } from '../Shared/jobdescription.service';

@Component({
  selector: 'app-jd-form',
  templateUrl: './jd-form.component.html',
  styleUrls: ['./jd-form.component.scss']
})
export class JdFormComponent {
 
  jobForm: FormGroup;
  myForm: FormGroup;
  jdData:any;
  constructor(private fb: FormBuilder,
    private service:LoginServicesService,
    private router:Router,public jobDescriptionService:JobdescriptionService) { }

  
  ngOnInit() {
    this.addJobDescription();
    this.jdData = localStorage.getItem("Job Description");

  // Clear localStorage if the page is refreshed
  window.addEventListener('beforeunload', () => {
    localStorage.removeItem("Job Description");
  });
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      isActive: [false]
    });
  }

  get register() {
     return this.jobForm.controls;
  }

addJobDescription(){
  this.jobForm = this.fb.group({
    jobDescription: ['', [
      Validators.required,
      Validators.maxLength(250),
      Validators.pattern(/^[a-zA-Z\s]*$/)
    ]]
  });
}

next() {
  localStorage.setItem('Job Description', this.jdData);

  if (this.jobForm.valid) {
    this.router.navigate(['/dashboard/forms/technology-form']);                                                      
  }
}

isRouteActive(routePath: string): boolean {
  return this.router.isActive(routePath, false);
}
jobrouting(){
  this.router.navigateByUrl('dashboard/forms/jd-form');
}
skillrouting(){
  this.router.navigateByUrl('dashboard/forms/skill-evaluation-form');
}
}
