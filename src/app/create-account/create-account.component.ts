import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  myUserForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.myUserForm = this.formBuilder.group({
    password: ['', Validators.required],
    confirmpassword:[""],
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    country:  ['', Validators.required],
    gender:  ['', Validators.required],
    Address:  ['', Validators.required],
    mobile:  ['', Validators.required],
    state:  ['', Validators.required],
    modifiedon:  [''],
    privacy:['']
    });
  }
  onSubmit(){
    console.log(this.myUserForm.value)
  }
  onGender(data:String){
    console.log(data)
    this.myUserForm.controls['gender'].setValue(data);
  }
}
