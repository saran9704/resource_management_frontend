import { Component, ContentChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { LoginServicesService } from '../shared/login-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm: FormGroup;
  error: string = '';
  visibleModel = false;
  submitted:boolean=false;
  showPassword=false;
  userData:any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: LoginServicesService,
    private route: Router
  ) {}

  ngOnInit() {
    this.signInForm();
    localStorage.clear();
  }

  signInForm() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        Validators.maxLength(100),
        Validators.email,
        Validators.minLength(15),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}'),
        Validators.maxLength(20),
        Validators.minLength(6),
      ]),
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  isusernameRequired() {
    return (
      this.username.hasError('required') &&
      (this.username.dirty || this.username.touched)
    );
  }

  isusernameInvalid() {
    return (
      this.username.hasError('email')|| this.password.hasError('pattern') && (this.username.dirty || this.username.touched)
    );
  }

  isPasswordRequired() {
    return (
      this.password.hasError('required') &&
      (this.password.dirty || this.password.touched)
    );
  }

  isPasswordInvalid() {
    return (
      (this.password.hasError('minlength') || this.password.hasError('maxlength') || this.password.hasError('pattern')) &&
      (this.password.dirty || this.password.touched)
    );
  }
  errorModel() {
    this.visibleModel = !this.visibleModel;
  }

  handleLiveDemoChange(event: any) {
    this.visibleModel = event;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
      if (this.submitted) {
        this.authService.authenticate(this.loginForm.value).subscribe((res: any) => {
          localStorage.setItem("token", res.data.token)
          localStorage.setItem("currentUser",JSON.stringify( res.data.currentUser))     
          this.route.navigateByUrl('/dashboard');          
        },
          (error) => {
            this.errorModel();
            this.loginForm.reset();
            this.route.navigateByUrl('/login');
          })}
        }
}
