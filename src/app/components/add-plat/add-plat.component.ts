import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  title: string="Add Plat";
  image: any;
  plats:any;
  plat:any;
  addPlatForm: FormGroup;
  exist : boolean;
  id:any;
  findedPlat:any={};
  constructor(private fb: FormBuilder, 
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private platService: PlatService ) { }

  ngOnInit() {
    this.id =this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.title="Edit Plat";
      this.platService.getPlatById(this.id).subscribe(
        (data)=>{this.findedPlat = data;}
      );
    }
   
    this.image = "assets/img/logo.png";
    this.addPlatForm = this.fb.group({
      name: [''],
      price: [''],
      description: ['']

    })
 
  }

  addOrEdit(p:any) {
    if (this.id) {
      this.platService.editPlat(this.findedPlat).subscribe(
        ()=>{
          console.log('Plat edit with success');
          this.router.navigate(['dashboardChef']);
        }
      ) 
    } else {
      this.platService.addPlat(p).subscribe(
        ()=>{
          console.log('Plat added with success');
          this.router.navigate(['dashboardChef']);
        }
      ) 
    }
 
  }


}
