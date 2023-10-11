import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
  title: any;
  image: any;
  //1er etape
  user: any = {};
  id: any;
  users: any;
  //2eme etape 
  addChefForm: FormGroup;
  //3eme etape

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.users = JSON.parse(localStorage.getItem("users") || "[]");
    if (this.id) {
      this.title = "Edit Chef";
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id == this.id) {
          this.user = this.users[i];

        }

      }
    }else{
      this.title = "Add Chef";

    }
    this.image = "assets/img/logo.png";
    this.addChefForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      specialite: [''],
      experience: [''],
      dateNaissance: ['']

    })

  }
  addOrEditChef() {
    if (this.id) {
      //edit
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id == this.id) {
          this.users[i] = this.user;
          
        }
        
      }
      localStorage.setItem("users",JSON.stringify(this.users))
      
    }
  else {
    //add
    console.log("my object", this.user);
    //comment faire l'ajout
    //from object to string
    
    let idUser = JSON.parse(localStorage.getItem("idUser") || "1");
    this.user.id = idUser;
    this.user.role = "chef";
    this.users.push(this.user)

    localStorage.setItem("users", JSON.stringify(this.users));
    localStorage.setItem("idUser", idUser + 1);
   }
   this.router.navigate(['dashboardAdmin']);
  }
}