import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm :FormGroup;
  submitted = false;
  flagsCheck = false;
  message = "";
  constructor(private formBuilder :FormBuilder,private myRoute: Router,private s:DataService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true
       //return this.myRoute.navigate(['/home'])
    
    this.loginForm.invalid
     // return this.myRoute.navigate(['login']);
            }
          
 
   checkLogin(){
     this.flagsCheck = true;
    if(this.loginForm.controls['username'].value === "srikanth" && this.loginForm.controls['password'].value ==="12345678"){
       //this.message="login success" ;
       this.myRoute.navigate(['/', 'home']);
       alert("successfully login");
       this.s.sendToken(this.loginForm.value.username);
      
    }else{
      this.message ="Username or password is incorrect";
      this.myRoute.navigate(['login'])
      alert("your login is failed");
    }

  }

}
