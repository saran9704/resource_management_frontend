import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboards',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}


  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      isActive: [false]
    });
  }
  
  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      console.log(formData);
      // You can perform further actions with the form data here
    }
  }
  
}
