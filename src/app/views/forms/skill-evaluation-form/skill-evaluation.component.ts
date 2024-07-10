import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skill-evaluation-form',
  templateUrl: './skill-evaluation-form.component.html',
  styleUrls: ['./skill-evaluation-form.component.scss']
})
export class SkillEvaluationFormComponent {

  evaluationForm:FormGroup;
  formBuilder: any;
  programmingskills:any=["Beginner","Intermediate","Advanced"];
  communicationskills:any=["Beginner","Intermediate","Advanced"];
  problemSolvingingSkills:any=["Beginner","Intermediate","Advanced"];

  constructor(private router: Router, private route: ActivatedRoute,private fb:FormBuilder) { }
  ngOnInit(){
    this.addSkillEvaluation();
    this.TotalScore();
  }

  goToPrevious() {
   history.back();
   }
   

   addSkillEvaluation(){
    this.evaluationForm = this.fb.group({
      name: ['', Validators.required],
      email:['',Validators.required],
      programmingSkills: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      communicationSkills: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      problemSolvingSkills: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      totalScore: [{value: 0, disabled: true}]
   
      })}
   
    
      get register() {
        return this.evaluationForm.controls;
     }
   
     TotalScore() {
      this.evaluationForm.valueChanges.subscribe(values => {
        const { programmingSkills, communicationSkills, problemSolvingSkills } = values;
        const totalScore = programmingSkills + communicationSkills + problemSolvingSkills;
        const convertedTotalScore = (totalScore / 15) * 5; // Convert the total score to a scale of 5
        this.evaluationForm.patchValue({ totalScore: convertedTotalScore });
      });
    }
  
  
  submit(){
    // this.router.navigateByUrl('/')
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
