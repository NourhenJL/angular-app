import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-dashboard-chef',
  templateUrl: './dashboard-chef.component.html',
  styleUrls: ['./dashboard-chef.component.css']
})
export class DashboardChefComponent implements OnInit {
  title: any;
  chefs:any;
  plats: any;
  myPlats:any;
  connectedUser:any;
  constructor(private router : Router, private platService: PlatService) { }

  ngOnInit() {
    this.title = "Dashboard Chef";
    this.getAllPlats();
  }
 editPlat(id:any){
   this.router.navigate([`editPlat/${id}`]);
   //this.platService.editPlat(id).subscribe(
   // (data)=>{this.myPlats = data;}
  //);
 }
 delete(id:any){
  this.platService.deletePlat(id).subscribe(()=>{
    console.log("Plat delete with success");
   this.getAllPlats();
  });
 
 }

 getPlatById(id : any){
  this.router.navigate([`displayPlat/${id}`]);
 
}
getAllPlats(){
  this.platService.getAllPlats().subscribe(
    (data)=>{this.myPlats = data;}
  );
}
  

}
