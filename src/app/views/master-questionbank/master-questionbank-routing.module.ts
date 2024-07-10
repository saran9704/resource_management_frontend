import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterQuestionbankComponent } from './master-questionbank/master-questionbank.component';
import { ViewAnswerComponent } from './view-answer/view-answer.component';
import { AddQuestionComponent } from './add-question/add-question.component';

const routes: Routes = [
 
  {
    path: '',
    data: {
      title: 'Master Question bank',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'question-bank',
      },
      {
        path: 'master-question-bank',
        component: MasterQuestionbankComponent,
        data: {
          title: 'Question Bank ',
        },
      },
      {
        path: 'view-answer',
        component: ViewAnswerComponent,
        data: {
          title: ' View Answer',
        },
      },
      {
        path: 'add-questions',
        component: AddQuestionComponent,
        data: {
          title: 'Add Questions',
        },
      },


    ],
  }]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterQuestionbankRoutingModule { }
