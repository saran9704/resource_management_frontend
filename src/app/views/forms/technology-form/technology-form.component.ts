import { Component, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';


@Component({
  selector: 'app-technology-form',
  templateUrl: './technology-form.component.html',
  styleUrls: ['./technology-form.component.scss']
})
export class TechnologyFormComponent {

  technologyForm:FormGroup;
  technologies:any =["Angular","JavaFullstack"]
  stacks: any=null;
  jobDescription:any;
  levels:any=["Beginner","Intermediate","Advanced"];
  selectedOptions: string[] = [];
  
  constructor(private router: Router, private route: ActivatedRoute,
                      private fb:FormBuilder,private location:Location) { }
  ngOnInit(){
    this.addTechnology();
    this.jobDescription = this.route.snapshot.paramMap.get('jobDescription');

  }

  goToPrevious() {
    // this.location.back();
    this.router.navigate(['/dashboard/forms/jd-form']);
 
}
get register() {
  return this.technologyForm.controls;
}

addTechnology(){
  this.technologyForm = this.fb.group({
    technology: ['', Validators.required],
    level:['',Validators.required],
    stack: ['', Validators.required]
  });
}



  submit(){
    this.router.navigateByUrl('/dashboard/forms/skill-evaluation-form')
  }



  toggleSelectAllOptions(select: MatSelect): void {
    const allOptions = select.options.map(option => option.value);
  
    if (this.selectedOptions.length === allOptions.length) {
      // If all options are already selected, deselect all options
      this.selectedOptions = [];
    } else {
      // Select all options
      this.selectedOptions = [...allOptions];
    }
  
    select.writeValue(this.selectedOptions);
  }
  
  toggleOption(option: string): void {
    const index = this.selectedOptions.indexOf(option);
  
    if (index > -1) {
      this.selectedOptions.splice(index, 1);
    } else {
      this.selectedOptions.push(option);
    }
  }

  onTechnologyChange(technology: string): void {
    switch (technology) {
      case 'Angular':
        this.stacks = {
          frontend:['HTML', 'CSS', 'JavaScript', 'TypeScript']
          // backend:['Java', 'Spring', 'Hibernate']
        };
        break;
      case 'JavaFullstack':
        this.stacks = {
          frontend:['HTML', 'CSS', 'JavaScript', 'TypeScript'],
          backend:['Java', 'Spring', 'Hibernate']
        };  
        break;
      // Add more cases for other technologies
      default:
        this.stacks =null;
        break;
    }
  this.technologyForm.get('stack').setValue('');
  }
}
