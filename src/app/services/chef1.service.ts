import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Chef1Service {
   chefURL:string ="http://localhost:8080";

  constructor(private httpClient: HttpClient) { }
  getAllChefs(){
    return this.httpClient.get(this.chefURL);
  }
  getChefById(id:number){
    return this.httpClient.get(`${this.chefURL}/${id}`) ;
    //on peut faire la concatenation dans le js + "/" +id 
  }
  addChef(chef :any){
    return this.httpClient.post(this.chefURL, chef);
  }
  deleteChef(id : number){
    return this.httpClient.delete(`${this.chefURL}/${id}`);
  }
  editChef(chef:any){
    return this.httpClient.put(`${this.chefURL}/${chef.id}`, chef);
  }
}
