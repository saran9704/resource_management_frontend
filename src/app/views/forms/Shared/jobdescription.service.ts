import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobdescriptionService {
  private jobDescription: string = '';
  constructor() { }


  getJobDescription(): string {
    return this.jobDescription;
  }

  setJobDescription(description: string): void {
    this.jobDescription = description;
  }
}
