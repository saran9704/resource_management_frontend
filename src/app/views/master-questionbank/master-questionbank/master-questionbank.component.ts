import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-questionbank',
  templateUrl: './master-questionbank.component.html',
  styleUrls: ['./master-questionbank.component.scss']
})
export class MasterQuestionbankComponent {

  showContainer: boolean = false;
  questionType: string = '';
  clients:any=["Amazon","Zoho"];
  secondarySkills:any=[{id:1,name:"Introduction to Angular"},{id:1,name:"Data Binding"}];
  primarySkills:any=["Angular"];
  questionbank:FormGroup;
  secondarySkillShow;
  questionData:any=null
 

constructor(private route:Router,private fb:FormBuilder){}


public mcqQuestion: string = "what is angular perfect for?\n\na) SPA's\nb)MPA's \nc) DPA's\nd) CPA's\n\nCorrect Answer: a";
public definintion:string ="what is SPA?\n\n SPAs are good when the volume of data is small and the website needs a dynamic platform";
  
ngOnInit(){
    this.questionbanks();
  }

  get register() {
    return this.questionbank.controls;
  }
  
  questionbanks(){
    this.questionbank = this.fb.group({
      primarySkill: ['', Validators.required],
      secondarySkill:['',Validators.required],
      client:['',Validators.required]

      
    });
  }
  
  SelectSecondarySkill(){
   console.log(this.secondarySkillShow.secondarySkills);
  }
 
 
  resetForm() {
    this.questionbank.reset();
  }

 
  View() {
    this.showContainer = true;
    this.questionData=[1,2,3]
    // this.route.navigateByUrl('/dashboard/question-bank/view-answer')

  }


  addQuestion() {
 
  }

  importFromExcel() {
    
  }

 
}
