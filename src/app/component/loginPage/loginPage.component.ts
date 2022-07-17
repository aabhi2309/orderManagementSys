import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-loginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm:FormGroup
  formData:User
  loginDetail:User = {
    email: "abc@xyz.com",
    password: "123456",
  };
 
  constructor( private router:Router)  { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  navigateToDashboard() {
    this.router.navigate(['dashboard']);
  }
  onSubmit() {
    this.formData = this.loginForm.value;
    this.login(this.formData);
  }
  login(data: User) {    
     console.log(data, this.loginDetail)
      if ((this.loginDetail.email== data.email) && (this.loginDetail.password==data.password)) {
        sessionStorage.setItem('token', 'true');
        this.navigateToDashboard();
      } else {
        alert("Invalid Credentails");
      }
    }
  

}
