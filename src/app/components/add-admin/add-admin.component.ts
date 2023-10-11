import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
//declarartion des varaiable globales dima fou9 el constructor
//any interprete n'importe quelle type de variable 
//ngonint fct qui execute son code une seule fois des le lancement de cpte
//declaration d'une fct
title: any;
image: any;
//1er etape
user: any={};
//2eme etape 
addAdminForm :  FormGroup;
id:any;
//3eme etape
users :any;


  constructor(private fb : FormBuilder, private activatedRoute: ActivatedRoute, private router : Router) { }
//4eme etape decalaration de la fct non parametre

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.users=JSON.parse(localStorage.getItem("users")|| "[]");

    if (this.id) {
      //edit
      this.title= `Edit User : ${this.id} `;
      //recupeartion des anciennes valeurs
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id==this.id) {
        this.user = this.users[i];
      }
        
      }
      
    }
    else{
    this.title = "Add Admin";
    }
    this.image="assets/img/logo.png";

    this.addAdminForm = this.fb.group({
    firstName : [''],
    lastName : [''],
    email : [''],
    password : [''],
    tel : ['']
  })
  }
    clickMe(){
      alert("Test");
    }
    addOrEdit(){
      if (this.id) {
        //edit  
        for (let i = 0; i < this.users.length; i++) {
         if (this.users[i].id == this.id) {
           this.users[i]=this.user;
           
         } 
          
        }
        localStorage.setItem("users", JSON.stringify(this.users));

      }
      else{
        //add
      console.log("my object", this.user);
      //comment faire l'ajout
      //from object to string

      let  idUser=JSON.parse(localStorage.getItem("idUser") || "1");
      this.user.id=idUser;
      this.user.role="admin";
      console.log("userr",this.user);
      console.log("users",this.users);
      
      this.users.push(this.user)

      localStorage.setItem("users", JSON.stringify(this.users));
      localStorage.setItem("idUser",idUser+1);
    }
    this.router.navigate(['dashboardAdmin']);
    }
    
    
  

}
