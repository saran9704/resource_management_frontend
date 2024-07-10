import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterQuestionbankRoutingModule } from './master-questionbank-routing.module';
import { MasterQuestionbankComponent } from './master-questionbank/master-questionbank.component';
import { ViewAnswerComponent } from './view-answer/view-answer.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MasterQuestionbankComponent,
    ViewAnswerComponent,
    AddQuestionComponent
  ],
  imports: [
    CommonModule,
    MasterQuestionbankRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MasterQuestionbankModule { }
