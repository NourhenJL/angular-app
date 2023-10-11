import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title : any;
  test : any;
  signupForm : FormGroup;


  constructor(private fb :  FormBuilder) { }

  ngOnInit() {
    this.title = "Sign up";
    this.test=false;
    this.signupForm=this.fb.group({
      firstName : ['',[Validators.required,Validators.minLength(3)]],
      lastName : ['',[Validators.required,Validators.minLength(5)]],
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(8)]],
      confirmPassword : ['',[Validators.required]],
      tel : ['',[Validators.required,Validators.minLength(8),Validators.maxLength(13)]]
    
    }, 
    {
    validator: MustMatch('password','confirmPassword')
    }

    )



  }
  signup(f:any)
  {
    console.log("my object",f);
    let users= JSON.parse(localStorage.getItem("users") || "[]");
    let idUser= JSON.parse(localStorage.getItem("idUser") || "1");
    f.id=idUser;
    f.role="client";
    users.push(f);
    localStorage.setItem("users",JSON.stringify(users));
    localStorage.setItem("idUser",idUser+1);


}

}
