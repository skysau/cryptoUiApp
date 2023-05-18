import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  myLogInForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.myLogInForm = this.formBuilder.group({
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  
  onSubmit(){
    console.log(this.myLogInForm.value);
    this.router.navigateByUrl('/dashboard');
  }
  createAccount(){
    this.router.navigateByUrl('/create');
  }
}
