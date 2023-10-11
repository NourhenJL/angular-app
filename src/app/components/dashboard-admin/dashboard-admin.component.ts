import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChefService } from 'src/app/chef.service';
import { Chef1Service } from 'src/app/services/chef1.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  title: any;
  users: any;
  plats: any;
  chefs:any;

  constructor(private router : Router, private chefService:Chef1Service) { }

  ngOnInit() {
    this.title = "Dashboard Admin";
    this.users = JSON.parse(localStorage.getItem ("users") ||  "[]");
    this.plats = JSON.parse(localStorage.getItem ("plats") ||  "[]");
    this.chefService.getAllChefs().subscribe(
      (data: any) =>{
     this.chefs=data;
      }
      //fonction arrow fonction dans le ts =>{}
    );
    
    

  }

  deleteUser(id:any){
    let pos;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id==id) {
        pos=i;
        
      }
      
      
    }
    this.users.splice(pos,1);
    localStorage.setItem("users",JSON.stringify(this.users));
  }

  deleteObject(id:any, key:any){
    let pos;
    let tab=JSON.parse(localStorage.getItem(key)|| "[]");
    for (let i = 0; i < tab.length; i++) {
      if (tab[i].id==id) {
        pos=i;
        
      }
      
      
    }
    tab.splice(pos,1);
    localStorage.setItem(key,JSON.stringify(tab));
  }

  getColor(role)
  {
    switch (role) {
      case 'admin':
        return 'green';
        break;
      case 'client':
        return 'blue';
        break;
    
      case 'chef':
          return 'yellow';
          break;
      
      default:
        break;
    }
  }
  deletePlat(id:any){
    let pos;
    for (let i = 0; i < this.plats.length; i++) {
      if (this.plats[i].id==id) {
        pos=i; 
      }
    }
    this.plats.splice(pos,1);
    localStorage.setItem("plats",JSON.stringify(this.plats));
  }
  displayUser(id:any){
    this.router.navigate([`displayUser/${id}`]);

  }
  editUser(id:any,role:any){
    if (role =="admin" || role == "client"){
      this.router.navigate([`editUser/${id}`])
    }
    else{
      this.router.navigate([`editChef/${id}`])
    }

  }


}
