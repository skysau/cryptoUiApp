import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CriptoAppServiceService } from '../service/cripto-app-service.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  myLogInForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router,private criptoService:CriptoAppServiceService) {
    this.myLogInForm = this.formBuilder.group({
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  
  onSubmit(){
    this.criptoService.getUser(this.myLogInForm.value).subscribe((res)=>{
      if(res.length >0){
        this.router.navigateByUrl('/dashboard');
      }else{
        alert("Invalid Credentials");
      }
    });
    //this.router.navigateByUrl('/dashboard');
  }
  createAccount(){
    this.router.navigateByUrl('/create');
  }
}
