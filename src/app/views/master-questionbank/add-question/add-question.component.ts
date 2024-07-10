import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss'],
})
export class AddQuestionComponent implements OnInit {
  questions: any[] = [];
  pagedQuestions: any[] = [];
  itemsPerPage: number = 1;
  currentPage: number = 0;
  totalPages: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.addMoreQuestions();
  }

  getCurrentPageQuestions() {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.pagedQuestions.slice(startIndex, endIndex);
  }

  addMoreQuestions() {
    this.questions.push({
      text: '',
      type: 'select',
      options: [],
      answer: ''
    });
    this.updatePagination();
    this.nextPage();
  }

  toggleOptions(question: any) {
    if (question.type !== 'mcq') {
      question.options = [];
      question.answer = '';
    }
  }

  addOption(question: any) {
    if (question.options.length < 4) {
      question.options.push('');
    }
  }

  removeOption(question: any, index: number) {
    question.options.splice(index, 1);
    if (question.answer === index.toString()) {
      question.answer = '';
    }
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.questions.length / this.itemsPerPage);
    this.pagedQuestions = this.questions.reduce((acc, question, index) => {
      const pageIndex = Math.floor(index / this.itemsPerPage);
      if (!acc[pageIndex]) {
        acc[pageIndex] = [];
      }
      acc[pageIndex].push(question);
      return acc;
    }, []);
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }

  saveData() {
    const jsonData = {
      primarySkill: '',
      client: '',
      questions: [],
    };
    jsonData.primarySkill = (document.getElementById('primarySkill') as HTMLInputElement).value;
    jsonData.client = (document.getElementById('client') as HTMLInputElement).value;
    this.questions.forEach((question) => {
      const questionData = {
        text: question.text,
        type: question.type,
        options: question.options,
        answer: question.answer,
      };
      jsonData.questions.push(questionData);
    });
    console.log(JSON.stringify(jsonData));
  }

}
