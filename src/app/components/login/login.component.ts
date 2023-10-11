import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title: any;
  image: any;
  user: any = {};
  loginForm: FormGroup;
  exist: boolean;


  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.title = "Login";
    this.image = "assets/img/logo.png";

    this.loginForm = this.fb.group({
      email: [''],
      password: ['']

    })
  }

  login() {
    console.log(this.user);
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let findedUser;

    for (let i = 0; i < users.length; i++) {
      if (users[i].email == this.user.email && users[i].password == this.user.password) {
        //console.log("test");

        findedUser = users[i];

      }


    }

    console.log(findedUser);

    if (findedUser) {
      localStorage.setItem("connectedUser",JSON.stringify(findedUser));
      //exist
      switch (findedUser.role) {
        case 'admin':
          this.router.navigate(['dashboardAdmin'])
          break;
        case 'chef':
          this.router.navigate(['dashboardChef'])
          break;
        case 'client':
          this.router.navigate(['']) //[''] on se place dans le home
          break;


      }



    }
    else {
      //not exist 
      this.exist = false;
    }
  }

}
