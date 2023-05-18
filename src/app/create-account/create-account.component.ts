import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CriptoAppServiceService } from '../service/cripto-app-service.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  myUserForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router,private criptoService:CriptoAppServiceService) {
    this.myUserForm = this.formBuilder.group({
    password: ['', Validators.required],
    confirmpassword:[""],
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    country:  ['', Validators.required],
    gender:  ['Male', Validators.required],
    Address:  ['', Validators.required],
    mobile:  ['', Validators.required],
    state:  ['', Validators.required],
    modifiedon:  [''],
    privacy:[true],
    targetInvestment:[],
    age: [, Validators.required],
    });
  }
  onSubmit(){
    const dates=new Date()
    this.myUserForm.controls['modifiedon'].setValue(dates);
    if(this.myUserForm.value.password ===this.myUserForm.value.confirmpassword){
           this.criptoService.createNewUser(this.myUserForm.value).subscribe(res=>{
      this.router.navigate(['/dashboard']);
     });
    }else{
      alert("Password Doesn't Match");
    }
    console.log(this.myUserForm.value)
  }
  onGender(data:String){
    console.log(data)
    this.myUserForm.controls['gender'].setValue(data);
  }
  onClickLogin(){
    this.router.navigate(['/log-in']);
  }
}
