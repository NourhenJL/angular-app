import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PlatService {
  platURL:string ="http://localhost:8080/api/plats";

  constructor(private httpClient: HttpClient) { }
  getAllPlats(){
    return this.httpClient.get(this.platURL);
  }
  getPlatById(id:number){
    return this.httpClient.get(`${this.platURL}/${id}`) ;
    //on peut faire la concatenation dans le js + "/" +id 
  }
  addPlat(Plat :any){
    return this.httpClient.post(this.platURL, Plat);
  }
  deletePlat(id : number){
    return this.httpClient.delete(`${this.platURL}/${id}`);
  }
  editPlat(Plat:any){
    return this.httpClient.put(`${this.platURL}/${Plat.id}`, Plat);
  }
}
