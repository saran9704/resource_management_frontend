import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-answer',
  templateUrl: './view-answer.component.html',
  styleUrls: ['./view-answer.component.scss']
})
export class ViewAnswerComponent {
  questionType: string = '';



  constructor(private route:Router){}
  
  ngOnInit(){
   
  }
  backbutton(){
  //  this.route.navigateByUrl('/dashboard/question-bank/master-question-bank')
  history.back();
  }
  addQuestion() {
    // Logic for adding more questions
  }

  importFromExcel() {
    // Logic for importing from Excel
  }
}
