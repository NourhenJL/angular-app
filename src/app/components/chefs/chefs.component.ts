import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
users:any;
chefs:any=[];
  constructor() { }

  ngOnInit() {
    //import des users
    this.users =JSON.parse(localStorage.getItem("users" ||"[]"));
//filtrage des users
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].role == "chef") {
        this.chefs.push(this.users[i]);
        
      }    
    }
    console.log("chefs",this.chefs);
  }
 update(e){
   this.users =e;
 }
}
